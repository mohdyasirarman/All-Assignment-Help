const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const { body, validationResult } = require('express-validator');
const auth = require('../middleware/auth');
const Orders = require('../models/Orders');
const logger = require('../utils/logger');

// Configure multer for file upload
const storage = multer.diskStorage({
    destination: process.env.UPLOAD_DIR || 'uploads/',
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    const allowedTypes = (process.env.ALLOWED_FILE_TYPES || '.pdf,.docx,.doc,.xlsx,.xls,.txt').split(',');
    const extname = path.extname(file.originalname).toLowerCase();
    
    if (allowedTypes.includes(extname)) {
        return cb(null, true);
    }
    cb(new Error('Invalid file type. Allowed types: ' + allowedTypes.join(', ')));
};

const upload = multer({
    storage: storage,
    limits: {
        fileSize: parseInt(process.env.MAX_FILE_SIZE) || 10000000 // 10MB default
    },
    fileFilter
});

// Validation middleware
const validateOrder = [
    body('title').trim().notEmpty().withMessage('Title is required'),
    body('desc').trim().notEmpty().withMessage('Description is required')
        .isLength({ min: 15 }).withMessage('Description must be at least 15 characters'),
    body('subject').trim().notEmpty().withMessage('Subject is required'),
    body('type').trim().notEmpty().withMessage('Type is required'),
    body('deadline').isISO8601().toDate().withMessage('Invalid deadline date')
];

// Create new order
router.post('/order', auth, express.json(), validateOrder, async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { title, desc, subject, type, deadline } = req.body;
        const ordersModel = new Orders();
        
        try {
            const orderId = await ordersModel.newOrder(title, desc, subject, type, deadline);
            res.status(201).json({ 
                message: 'Order created successfully',
                orderId 
            });
        } catch (error) {
            logger.error('Error in order creation:', error);
            res.status(500).json({ error: 'Database error while creating order' });
        }
    } catch (error) {
        logger.error('Error in route handler:', error);
        res.status(500).json({ error: error.message || 'Failed to create order' });
    }
});

// Upload files for an order
router.post('/order/:orderId/files', auth, upload.array('files', 5), async (req, res) => {
    try {
        const { orderId } = req.params;
        const files = req.files;
        
        if (!files || files.length === 0) {
            return res.status(400).json({ error: 'No files uploaded' });
        }

        const ordersModel = new Orders();
        const filePromises = files.map(file => 
            ordersModel.newOrderFile(orderId, file.filename, file.originalname)
        );

        await Promise.all(filePromises);

        res.status(200).json({ 
            message: 'Files uploaded successfully',
            files: files.map(f => ({ 
                originalName: f.originalname,
                storedName: f.filename 
            }))
        });
    } catch (error) {
        logger.error('Error uploading files:', error);
        res.status(500).json({ error: error.message || 'Failed to upload files' });
    }
});

// Get all orders for a user
router.get('/orders', auth, async (req, res) => {
    try {
        const ordersModel = new Orders();
        const orders = await ordersModel.getAllOrders();
        res.status(200).json(orders);
    } catch (error) {
        logger.error('Error getting orders:', error);
        res.status(500).json({ error: error.message || 'Failed to get orders' });
    }
});

// Get specific order details
router.get('/order/:orderId', auth, async (req, res) => {
    try {
        const { orderId } = req.params;
        const ordersModel = new Orders();
        
        const [order, details, value, files] = await Promise.all([
            ordersModel.getOrderByID(orderId),
            ordersModel.getOrderDetailsByID(orderId),
            ordersModel.getOrderValueByID(orderId),
            ordersModel.getOrderFileByID(orderId)
        ]);

        if (!order) {
            return res.status(404).json({ error: 'Order not found' });
        }

        res.status(200).json({
            ...order,
            details,
            value,
            files
        });
    } catch (error) {
        logger.error('Error getting order details:', error);
        res.status(500).json({ error: error.message || 'Failed to get order details' });
    }
});

// Update order status
router.patch('/order/:orderId/status', auth, express.json(), async (req, res) => {
    try {
        const { orderId } = req.params;
        const { status } = req.body;

        if (status === undefined) {
            return res.status(400).json({ error: 'Status is required' });
        }

        const ordersModel = new Orders();
        await ordersModel.updateStatusByOrderID(orderId, status);

        res.status(200).json({ 
            message: 'Order status updated successfully',
            orderId,
            status 
        });
    } catch (error) {
        logger.error('Error updating order status:', error);
        res.status(500).json({ error: error.message || 'Failed to update order status' });
    }
});

// Update order value
router.patch('/order/:orderId/value', auth, express.json(), async (req, res) => {
    try {
        const { orderId } = req.params;
        const { value } = req.body;

        if (value === undefined) {
            return res.status(400).json({ error: 'Value is required' });
        }

        const ordersModel = new Orders();
        await ordersModel.updateValueByOrderID(orderId, value);

        res.status(200).json({ 
            message: 'Order value updated successfully',
            orderId,
            value 
        });
    } catch (error) {
        logger.error('Error updating order value:', error);
        res.status(500).json({ error: error.message || 'Failed to update order value' });
    }
});

// Assign teacher to order
router.patch('/order/:orderId/assign', auth, express.json(), async (req, res) => {
    try {
        const { orderId } = req.params;
        const { teacherId } = req.body;

        if (!teacherId) {
            return res.status(400).json({ error: 'Teacher ID is required' });
        }

        const ordersModel = new Orders();
        await ordersModel.updateTeacherByOrderID(orderId, teacherId);

        res.status(200).json({ 
            message: 'Teacher assigned successfully',
            orderId,
            teacherId 
        });
    } catch (error) {
        logger.error('Error assigning teacher:', error);
        res.status(500).json({ error: error.message || 'Failed to assign teacher' });
    }
});

module.exports = router;
