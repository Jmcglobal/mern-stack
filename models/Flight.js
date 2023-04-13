
// models/Flight.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const FlightSchema = new Schema({
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    passengers: {
        type: Number,
        required: true
    }
});

module.exports = Flight = mongoose.model('flight', FlightSchema);