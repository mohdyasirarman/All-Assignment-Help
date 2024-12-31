const express = require('express');
const Auth = require("../models/Auth");
const Orders = require("../models/Orders")
const router = express.Router();

router.get("/orders", (req, res) => {
    if (typeof (req.body.authKey) != "undefined" && Auth.exists(req.body.authKey)) {
        const orders = Orders.getAllOrders()
        res.status(200).json({ "data": orders })
    } else {
        res.sendStatus(404)
    }
})

router.get("/orders/files", (req, res) => {
    if (typeof (req.body.authKey) != "undefined" && Auth.exists(req.body.authKey)) {
        const orders_files = Orders.getAllOrdersFile()
        res.status(200).json({ "data": orders_files })
    } else {
        res.sendStatus(404)
    }
})

router.post("/orders/update-teacher", (req, res) => {
    const teacherid = req.body.teacherid
    const orderid = req.body.orderid
    if (typeof (req.body.authKey) != "undefined" && Auth.exists(req.body.authKey)) {
        let result = Orders.UpdateTeacherByOrderID(orderid, teacherid)
        if (result != -1) {
            res.status(200).json({ "teacher ID": result })
        } else {
            res.sendStatus(500)
        }
    } else {
        res.sendStatus(404)
    }

})

router.post("/orders/update-status", (req, res) => {
    const status = req.body.status
    const orderid = req.body.orderid
    if (typeof (req.body.authKey) != "undefined" && Auth.exists(req.body.authKey)) {
        let result = Orders.UpdateStatusByOrderID(orderid, status)
        if (result != -1) {
            res.status(200).json({ "order ID": orderid })
        } else {
            res.sendStatus(500)
        }
    } else {
        res.sendStatus(404)
    }

})

router.post("/orders/update-value", (req, res) => {
    const value = req.body.value
    const orderid = req.body.orderid
    if (typeof (req.body.authKey) != "undefined" && Auth.exists(req.body.authKey)) {
        let result = Orders.UpdateValueByOrderID(orderid, value)
        if (result != -1) {
            res.status(200).json({ "order ID": orderid })
        } else {
            res.sendStatus(500)
        }
    } else {
        res.sendStatus(404)
    }

})

router.get("/orders/by-teacher-id", (req, res) => {
    const teacherid = req.body.teacherid
    if (typeof (req.body.authKey) != "undefined" && Auth.exists(req.body.authKey)) {
        let result = Orders.getAllOrdersByTeacherID(teacherid)
        if (result != -1) {
            res.status(200).json({ "orders": result })
        } else {
            res.sendStatus(500)
        }
    }else{
        res.sendStatus(404)
    }

})

router.get("/order/by-id", (req, res) => {
    const orderid = req.body.orderid
    if (typeof (req.body.authKey) != "undefined" && Auth.exists(req.body.authKey)) {
        let result = Orders.getOrderByID(orderid)
        if (result != -1) {
            res.status(200).json({ "order": result[0] })
        } else {
            res.sendStatus(500)
        }
    }else{
        res.sendStatus(404)
    }

})

router.get("/order-details/by-id", (req, res) => {
    const orderid = req.body.orderid
    if (typeof (req.body.authKey) != "undefined" && Auth.exists(req.body.authKey)) {
        let result = Orders.getOrderDetailsByID(orderid)
        if (result != -1) {
            res.status(200).json({ "order-details": result[0] })
        } else {
            res.sendStatus(500)
        }
    }else{
        res.sendStatus(404)
    }

})


router.get("/order-value/by-id", (req, res) => {
    const orderid = req.body.orderid
    if (typeof (req.body.authKey) != "undefined" && Auth.exists(req.body.authKey)) {
        let result = Orders.getOrderValueByID(orderid)
        if (result != -1) {
            res.status(200).json({ "order-value": result[0] })
        } else {
            res.sendStatus(500)
        }
    }else{
        res.sendStatus(404)
    }

})

router.get("/order-file/by-id", (req, res) => {
    const orderid = req.body.orderid
    if (typeof (req.body.authKey) != "undefined" && Auth.exists(req.body.authKey)) {
        let result = Orders.getOrderFileByID(orderid)
        if (result != -1) {
            res.status(200).json({ "order-file": result[0]})
        } else {
            res.sendStatus(500)
        }
    }else{
        res.sendStatus(404)
    }

})

router.get("/orders/by-userid", (req, res) => {
    const userid = req.body.userid
    if (typeof (req.body.authKey) != "undefined" && Auth.exists(req.body.authKey)) {
        let result = Orders.getAllOrdersByUserID(userid)
        if (result != -1) {
            res.status(200).json({ "orders": result[0]})
        } else {
            res.sendStatus(500)
        }
    }else{
        res.sendStatus(404)
    }

})

module.exports = router