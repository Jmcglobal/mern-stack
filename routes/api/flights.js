
// routes/api/flights.js
const express = require('express');
const router = express.Router();

// Flight Model
const Flight = require('../../models/Flight');

// @route   GET api/flights
// @desc    Get All Flights
// @access  Public
router.get('/', (req, res) => {
    Flight.find()
        .sort({ date: -1 })
        .then(flights => res.json(flights))
});

// @route   POST api/flights
// @desc    Create A Flight
// @access  Public
router.post('/', (req, res) => {
    const newFlight = new Flight({
        from: req.body.from,
        to: req.body.to,
        date: req.body.date,
        passengers: req.body.passengers
    });

    newFlight.save().then(flight => res.json(flight));
});

// @route   DELETE api/flights/:id
// @desc    Delete A Flight
// @access  Public
router.delete('/:id', (req, res) => {
    Flight.findById(req.params.id)
        .then(flight => flight.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;