const sqlite3 = require('sqlite3').verbose();
const logger = require('../utils/logger');
const fs = require('fs');
const path = require('path');

class Database {
    constructor() {
        if (!Database.instance) {
            const dbPath = './database/database.db';
            const initSqlPath = './database/init.sql';
            
            // Create database directory if it doesn't exist
            const dbDir = path.dirname(dbPath);
            if (!fs.existsSync(dbDir)) {
                fs.mkdirSync(dbDir, { recursive: true });
            }

            this.db = new sqlite3.Database(dbPath, (err) => {
                if (err) {
                    logger.error('Error connecting to database:', err);
                    throw err;
                }
                logger.info('Connected to SQLite database');

                // Initialize database with schema
                const initSql = fs.readFileSync(initSqlPath, 'utf8');
                this.db.exec(initSql, (err) => {
                    if (err) {
                        logger.error('Error initializing database schema:', err);
                        throw err;
                    }
                    logger.info('Database schema initialized successfully');
                });
            });
            Database.instance = this;
        }
        return Database.instance;
    }

    query(sql, params = []) {
        return new Promise((resolve, reject) => {
            this.db.all(sql, params, (err, rows) => {
                if (err) {
                    logger.error('Database query error:', err);
                    reject(err);
                    return;
                }
                resolve(rows);
            });
        });
    }

    run(sql, params = []) {
        return new Promise((resolve, reject) => {
            this.db.run(sql, params, function(err) {
                if (err) {
                    logger.error('Database run error:', err);
                    reject(err);
                    return;
                }
                resolve({ id: this.lastID, changes: this.changes });
            });
        });
    }

    close() {
        if (Database.instance) {
            Database.instance.db.close((err) => {
                if (err) {
                    logger.error('Error closing database:', err);
                    throw err;
                }
                logger.info('Database connection closed');
            });
            Database.instance = null;
        }
    }
}

module.exports = Database;