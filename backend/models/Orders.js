const Database = require("./Database");
const logger = require('../utils/logger');

class Orders {
    constructor() {
        this.db = new Database();
    }

    async newOrder(title, desc, subject, type, deadline) {
        try {
            const result = await this.db.run(
                "INSERT INTO orders (title, descrip, sub, typ, deadline) VALUES (?, ?, ?, ?, ?)",
                [title, desc, subject, type, deadline]
            );
            return result.id;
        } catch (error) {
            logger.error('Error creating new order:', error);
            throw error;
        }
    }

    async newOrderFile(orderid, file_name, original_file_name) {
        try {
            const result = await this.db.run(
                "INSERT INTO orders_file (orderid, file_name, original_file_name) VALUES (?, ?, ?)",
                [orderid, file_name, original_file_name]
            );

            await this.db.run(
                "INSERT INTO order_details (orderid, status) VALUES (?, ?)",
                [orderid, 0]
            );

            await this.db.run(
                "INSERT INTO order_value (orderid) VALUES (?)",
                [orderid]
            );

            return orderid;
        } catch (error) {
            logger.error('Error creating order file:', error);
            throw error;
        }
    }

    async getAllOrders() {
        try {
            return await this.db.query("SELECT * FROM orders");
        } catch (error) {
            logger.error('Error getting all orders:', error);
            throw error;
        }
    }

    async getAllOrdersFile() {
        try {
            return await this.db.query("SELECT * FROM orders_file");
        } catch (error) {
            logger.error('Error getting all order files:', error);
            throw error;
        }
    }

    async updateTeacherByOrderID(orderid, teacher_id) {
        try {
            await this.db.run(
                "UPDATE order_details SET teacher_id = ? WHERE orderid = ?",
                [teacher_id, orderid]
            );
            return teacher_id;
        } catch (error) {
            logger.error('Error updating teacher:', error);
            throw error;
        }
    }

    async updateStatusByOrderID(orderid, status) {
        try {
            await this.db.run(
                "UPDATE order_details SET status = ? WHERE orderid = ?",
                [status, orderid]
            );
            return orderid;
        } catch (error) {
            logger.error('Error updating status:', error);
            throw error;
        }
    }

    async updateValueByOrderID(orderid, value) {
        try {
            await this.db.run(
                "UPDATE order_value SET value = ? WHERE orderid = ?",
                [value, orderid]
            );
            return orderid;
        } catch (error) {
            logger.error('Error updating value:', error);
            throw error;
        }
    }

    async getAllOrdersByTeacherID(teacher_id) {
        try {
            return await this.db.query(
                "SELECT * FROM order_details WHERE teacher_id = ?",
                [teacher_id]
            );
        } catch (error) {
            logger.error('Error getting teacher orders:', error);
            throw error;
        }
    }

    async getOrderByID(orderid) {
        try {
            const rows = await this.db.query(
                "SELECT * FROM orders WHERE orderid = ?",
                [orderid]
            );
            return rows[0];
        } catch (error) {
            logger.error('Error getting order:', error);
            throw error;
        }
    }

    async getOrderDetailsByID(orderid) {
        try {
            const rows = await this.db.query(
                "SELECT * FROM order_details WHERE orderid = ?",
                [orderid]
            );
            return rows[0];
        } catch (error) {
            logger.error('Error getting order details:', error);
            throw error;
        }
    }

    async getOrderValueByID(orderid) {
        try {
            const rows = await this.db.query(
                "SELECT * FROM order_value WHERE orderid = ?",
                [orderid]
            );
            return rows[0];
        } catch (error) {
            logger.error('Error getting order value:', error);
            throw error;
        }
    }

    async getOrderFileByID(orderid) {
        try {
            return await this.db.query(
                "SELECT * FROM orders_file WHERE orderid = ?",
                [orderid]
            );
        } catch (error) {
            logger.error('Error getting order files:', error);
            throw error;
        }
    }

    async getAllOrdersByUserID(userid) {
        try {
            return await this.db.query(
                "SELECT * FROM user_orders WHERE userid = ?",
                [userid]
            );
        } catch (error) {
            logger.error('Error getting user orders:', error);
            throw error;
        }
    }

    async addOrderToUser(orderid, userid) {
        try {
            const result = await this.db.run(
                "INSERT INTO user_orders (userid, orderid) VALUES (?, ?)",
                [userid, orderid]
            );
            return result.id;
        } catch (error) {
            logger.error('Error adding order to user:', error);
            throw error;
        }
    }
}