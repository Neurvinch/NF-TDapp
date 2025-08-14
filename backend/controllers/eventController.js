const Event = require("../models/Event")

exports.createEvent = async (req, res) => {
    try {

        const event = await Event.create(req.body);

        res.status(201).json(event);
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
} 