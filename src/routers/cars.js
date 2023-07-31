const express = require('express');
const router = express.Router();
const cars = require("../../src/models/cars.js");

// we will handle post req 
router.post("/cars", async (req, res) => {
    try {
        const addCars = cars(req.body);
        const result = await addCars.save();
        res.status(200).send(result);
    } catch (e) {
        res.status(400).json({
            statusCode: 1,
            message: "all fields are required"
        })
        console.log("Error=>", e);
    }
})

//get all data
router.get("/cars", async (req, res) => {
    try {
        const getAllCars = await cars.find();
        res.send(getAllCars);
    } catch (e) {
        console.log(e);
    }
})

module.exports = router;