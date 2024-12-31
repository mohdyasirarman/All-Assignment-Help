const Database = require('./Database');
const logger = require('../utils/logger');

class Orders {
    constructor() {
        this.db = new Database();
    }

    async newOrder(title, desc, subject, type, deadline) {
        try {
            await this.db.run('BEGIN TRANSACTION');

            const result = await this.db.run(
                'INSERT INTO orders (title, descrip, sub, typ, deadline) VALUES (?, ?, ?, ?, ?)',
                [title, desc, subject, type, new Date(deadline).getTime()]
            );

            // Initialize order_details with default status
            await this.db.run(
                'INSERT INTO order_details (orderid, status) VALUES (?, ?)',
                [result.id, 0]
            );

            // Initialize orders_value
            await this.db.run(
                'INSERT INTO orders_value (orderid, value) VALUES (?, ?)',
                [result.id, null]
            );

            await this.db.run('COMMIT');
            console.log('New order created with ID:', result.id);
            return result.id;
        } catch (error) {
            await this.db.run('ROLLBACK');
            logger.error('Error creating order:', error);
            throw error;
        }
    }

    async newOrderFile(orderId, fileName, originalFileName) {
        try {
            await this.db.run(
                'INSERT INTO orders_file (orderid, file_name, original_file_name) VALUES (?, ?, ?)',
                [orderId, fileName, originalFileName]
            );
        } catch (error) {
            logger.error('Error creating order file:', error);
            throw error;
        }
    }

    async getAllOrders() {
        try {
            const orders = await this.db.query(`
                SELECT 
                    orderid,
                    title,
                    descrip as description,
                    sub as subject,
                    typ as type,
                    deadline 
                FROM orders 
                ORDER BY orderid DESC
            `);
            
            if (!Array.isArray(orders)) {
                logger.error('Expected array of orders but got:', typeof orders);
                return [];
            }

            const enrichedOrders = await Promise.all(
                orders.map(async (order) => {
                    const [details, value, files] = await Promise.all([
                        this.getOrderDetailsByID(order.orderid),
                        this.getOrderValueByID(order.orderid),
                        this.getOrderFileByID(order.orderid)
                    ]);
                    return {
                        ...order,
                        details,
                        value,
                        files
                    };
                })
            );
            return enrichedOrders;
        } catch (error) {
            logger.error('Error getting all orders:', error);
            throw error;
        }
    }

    async getOrderByID(orderId) {
        try {
            return await this.db.get(`
                SELECT 
                    orderid,
                    title,
                    descrip as description,
                    sub as subject,
                    typ as type,
                    deadline 
                FROM orders 
                WHERE orderid = ?
            `, [orderId]);
        } catch (error) {
            logger.error('Error getting order by ID:', error);
            throw error;
        }
    }

    async getOrderDetailsByID(orderId) {
        try {
            return await this.db.get(
                'SELECT status, teacher_id FROM order_details WHERE orderid = ?',
                [orderId]
            );
        } catch (error) {
            logger.error('Error getting order details by ID:', error);
            throw error;
        }
    }

    async getOrderValueByID(orderId) {
        try {
            return await this.db.get(
                'SELECT value FROM orders_value WHERE orderid = ?',
                [orderId]
            );
        } catch (error) {
            logger.error('Error getting order value by ID:', error);
            throw error;
        }
    }

    async getOrderFileByID(orderId) {
        try {
            return await this.db.query(
                'SELECT file_name, original_file_name FROM orders_file WHERE orderid = ?',
                [orderId]
            );
        } catch (error) {
            logger.error('Error getting order files by ID:', error);
            throw error;
        }
    }

    async updateStatusByOrderID(orderId, status) {
        try {
            const details = await this.getOrderDetailsByID(orderId);
            if (details) {
                await this.db.run(
                    'UPDATE order_details SET status = ? WHERE orderid = ?',
                    [status, orderId]
                );
            } else {
                await this.db.run(
                    'INSERT INTO order_details (orderid, status) VALUES (?, ?)',
                    [orderId, status]
                );
            }
        } catch (error) {
            logger.error('Error updating order status:', error);
            throw error;
        }
    }

    async updateValueByOrderID(orderId, value) {
        try {
            const valueRecord = await this.getOrderValueByID(orderId);
            if (valueRecord) {
                await this.db.run(
                    'UPDATE orders_value SET value = ? WHERE orderid = ?',
                    [value, orderId]
                );
            } else {
                await this.db.run(
                    'INSERT INTO orders_value (orderid, value) VALUES (?, ?)',
                    [orderId, value]
                );
            }
        } catch (error) {
            logger.error('Error updating order value:', error);
            throw error;
        }
    }

    async updateTeacherByOrderID(orderId, teacherId) {
        try {
            const details = await this.getOrderDetailsByID(orderId);
            if (details) {
                await this.db.run(
                    'UPDATE order_details SET teacher_id = ? WHERE orderid = ?',
                    [teacherId, orderId]
                );
            } else {
                await this.db.run(
                    'INSERT INTO order_details (orderid, teacher_id) VALUES (?, ?)',
                    [orderId, teacherId]
                );
            }
        } catch (error) {
            logger.error('Error updating teacher assignment:', error);
            throw error;
        }
    }

    async deleteOrder(orderId) {
        try {
            await this.db.run('BEGIN TRANSACTION');
            
            // Delete from all related tables
            await Promise.all([
                this.db.run('DELETE FROM orders WHERE orderid = ?', [orderId]),
                this.db.run('DELETE FROM order_details WHERE orderid = ?', [orderId]),
                this.db.run('DELETE FROM orders_value WHERE orderid = ?', [orderId]),
                this.db.run('DELETE FROM orders_file WHERE orderid = ?', [orderId])
            ]);

            await this.db.run('COMMIT');
        } catch (error) {
            await this.db.run('ROLLBACK');
            logger.error('Error deleting order:', error);
            throw error;
        }
    }
}

module.exports = Orders;