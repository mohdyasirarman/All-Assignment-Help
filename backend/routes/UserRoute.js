const express = require('express');
const bcrypt = require('bcryptjs');
const User = require("../models/User");
const logger = require('../utils/logger');
const router = express.Router();

// Create new user instance
const userModel = new User();

router.post("/add", async (req, res) => {
    try {
        logger.routeInfo(req, 'New user registration request received');
        
        const { name, email, password } = req.body;
        
        // Validate required fields
        if (!name || !email || !password) {
            logger.routeInfo(req, 'Missing required fields');
            return res.status(400).json({ error: "Missing required fields" });
        }

        const userId = await userModel.newUser(name, email, password);
        
        logger.routeInfo(req, 'User registered successfully');
        
        // Return user data without sensitive information
        res.status(200).json({
            user: {
                id: userId,
                name,
                email,
                role: 'user',
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            }
        });
    } catch (error) {
        logger.routeError(req, error);
        console.error('Error in /add route:', error);
        res.status(500).json({ error: "Internal server error" });
    }
});

router.post("/login", async (req, res) => {
    try {
        logger.routeInfo(req, 'Login request received');
        
        const { email, password } = req.body;
        
        // Validate required fields
        if (!email || !password) {
            logger.routeInfo(req, 'Missing required fields');
            return res.status(400).json({ error: "Missing required fields" });
        }

        const user = await userModel.getUserByEmail(email);
        if (!user) {
            logger.routeInfo(req, 'User not found');
            return res.status(404).json({ error: "User not found" });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            logger.routeInfo(req, 'Invalid password');
            return res.status(401).json({ error: "Invalid password" });
        }

        // Generate JWT token
        const token = require('jsonwebtoken').sign(
            { userId: user.id, email: user.email },
            process.env.JWT_SECRET || 'your-secret-key',
            { expiresIn: '24h' }
        );

        // Remove password from user object
        const { password: _, ...userWithoutPassword } = user;

        logger.routeInfo(req, 'Login successful');
        res.status(200).json({ 
            token,
            user: {
                ...userWithoutPassword,
                role: user.role || 'user' // Ensure role is always present
            }
        });
    } catch (error) {
        logger.routeError(req, error);
        console.error('Error in /login route:', error);
        res.status(500).json({ error: "Internal server error" });
    }
});

router.post("/update-contact", async (req, res) => {
    try {
        logger.routeInfo(req, 'Contact update request received');
        
        const { userid, contact } = req.body;
        if (!userid || !contact) {
            logger.routeInfo(req, 'Missing required fields');
            return res.status(400).json({ error: "Missing required fields" });
        }

        const result = await userModel.UpdateContactByUserID(contact, userid);
        
        logger.routeInfo(req, 'Contact updated successfully');
        res.status(200).json({ userid: result });
    } catch (error) {
        logger.routeError(req, error);
        console.error('Error in /update-contact route:', error);
        res.status(500).json({ error: "Internal server error" });
    }
});

router.post("/update-password", async (req, res) => {
    try {
        logger.routeInfo(req, 'Password update request received');
        
        const { userid, password } = req.body;
        if (!userid || !password) {
            logger.routeInfo(req, 'Missing required fields');
            return res.status(400).json({ error: "Missing required fields" });
        }

        const result = await userModel.UpdatePasswordByUserID(password, userid);
        
        logger.routeInfo(req, 'Password updated successfully');
        res.status(200).json({ userid: result });
    } catch (error) {
        logger.routeError(req, error);
        console.error('Error in /update-password route:', error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// Logout user
router.post('/logout', async (req, res) => {
    try {
        // Clear the auth token from client
        res.clearCookie('token');
        res.status(200).json({ message: 'Logged out successfully' });
    } catch (error) {
        logger.error('Error during logout:', error);
        res.status(500).json({ error: 'Failed to logout' });
    }
});

module.exports = router;