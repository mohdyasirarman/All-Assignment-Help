const logger = require('../utils/logger');

const errorHandler = (err, req, res, next) => {
    logger.error('Error:', err);

    if (err.name === 'ValidationError') {
        return res.status(400).json({ error: err.message });
    }

    if (err.name === 'UnauthorizedError') {
        return res.status(401).json({ error: 'Invalid token' });
    }

    res.status(500).json({ error: 'Internal server error' });
};

module.exports = errorHandler;
