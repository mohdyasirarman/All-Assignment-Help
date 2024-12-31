const winston = require('winston');
const path = require('path');

// Custom format for better readability
const customFormat = winston.format.printf(({ level, message, timestamp, ...metadata }) => {
    let msg = `${timestamp} [${level}] : ${message}`;
    if (Object.keys(metadata).length > 0) {
        msg += `\nMetadata: ${JSON.stringify(metadata, null, 2)}`;
    }
    return msg;
});

const logger = winston.createLogger({
    level: 'debug', // Changed to debug to get more detailed logs
    format: winston.format.combine(
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        winston.format.errors({ stack: true }),
        winston.format.splat(),
        winston.format.json()
    ),
    transports: [
        // Error logs
        new winston.transports.File({ 
            filename: path.join(__dirname, '..', 'logs', 'error.log'),
            level: 'error',
            format: winston.format.combine(
                winston.format.timestamp({
                    format: 'YYYY-MM-DD HH:mm:ss'
                }),
                customFormat
            )
        }),
        // All logs
        new winston.transports.File({ 
            filename: path.join(__dirname, '..', 'logs', 'combined.log'),
            format: winston.format.combine(
                winston.format.timestamp({
                    format: 'YYYY-MM-DD HH:mm:ss'
                }),
                customFormat
            )
        })
    ]
});

// Add console transport in development
if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.combine(
            winston.format.colorize(),
            winston.format.timestamp({
                format: 'YYYY-MM-DD HH:mm:ss'
            }),
            customFormat
        )
    }));
}

// Helper functions for consistent logging
logger.routeInfo = (req, message) => {
    logger.info(`[${req.method}] ${req.originalUrl} - ${message}`, {
        body: req.body,
        params: req.params,
        query: req.query
    });
};

logger.routeError = (req, error) => {
    logger.error(`[${req.method}] ${req.originalUrl} - Error: ${error.message}`, {
        error: error.stack,
        body: req.body,
        params: req.params,
        query: req.query
    });
};

logger.dbOperation = (operation, details) => {
    logger.info(`Database Operation: ${operation}`, details);
};

module.exports = logger;
