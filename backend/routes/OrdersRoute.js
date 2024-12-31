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
    const allowedTypes = (process.env.ALLOWED_FILE_TYPES || '.pdf,.jpeg,.png,.docx,.doc,.zip').split(',');
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
    body('desc').trim().notEmpty().withMessage('Description is required'),
    body('subject').trim().notEmpty().withMessage('Subject is required'),
    body('type').trim().notEmpty().withMessage('Type is required'),
    body('deadline').isISO8601().toDate().withMessage('Invalid deadline date')
];

// Create new order
router.post('/order', auth, validateOrder, async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { title, desc, subject, type, deadline } = req.body;
        const orders = new Orders();
        const id = await orders.newOrder(title, desc, subject, type, deadline);
        
        res.status(201).json({ orderId: id });
    } catch (error) {
        logger.error('Error creating order:', error);
        res.status(500).json({ error: 'Failed to create order' });
    }
});

// Upload files for an order
router.post('/order/upload', auth, upload.array('files', 5), async (req, res) => {
    try {
        if (!req.files || req.files.length === 0) {
            return res.status(400).json({ error: 'No files uploaded' });
        }

        const orderId = req.body.orderId;
        if (!orderId) {
            return res.status(400).json({ error: 'Order ID is required' });
        }

        const orders = new Orders();
        const results = [];

        for (const file of req.files) {
            const id = await orders.newOrderFile(
                orderId,
                file.filename,
                file.originalname
            );
            results.push({ fileId: id, filename: file.originalname });
        }

        res.status(201).json({ files: results });
    } catch (error) {
        logger.error('Error uploading files:', error);
        res.status(500).json({ error: 'Failed to upload files' });
    }
});

// Error handling for multer
router.use((error, req, res, next) => {
    if (error instanceof multer.MulterError) {
        if (error.code === 'LIMIT_FILE_SIZE') {
            return res.status(400).json({
                error: `File too large. Maximum size is ${process.env.MAX_FILE_SIZE / 1000000}MB`
            });
        }
        return res.status(400).json({ error: error.message });
    }
    next(error);
});

module.exports = router;
