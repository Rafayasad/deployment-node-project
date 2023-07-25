const express = require("express");
const mongoose = require("mongoose");

const cars = mongoose.Schema({
    engine: {
        type: String,
        required: true
    },
    color: {
        type: String
    },
    type: {
        type: String
    }
}, { timestamps: true })

const carsModel = mongoose.model('CarsModel', cars);
module.exports = carsModel;