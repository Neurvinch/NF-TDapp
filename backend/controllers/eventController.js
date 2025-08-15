const Event = require("../models/Event")
const {uploadJSONToIPFS} = require("../config/pinata")

const {} = 

exports.createEvent = async (req, res) => {
    try {

        const event = await Event.create(req.body);

        res.status(201).json(event);
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}   

exports.getEvents = async (req, res) => {
    try {

        const events = await Event.find();

        res.json(events);
        
    } catch (error) {
        res.status(500).json({ error: error.message });     
         
    }
}