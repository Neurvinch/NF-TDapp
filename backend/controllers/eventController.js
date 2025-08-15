const Event = require("../models/Event")
const {uploadJSONToIPFS} = require("../config/pinata")

const {deployTicketContract} = require("../utils/blockchain")


exports.createEvent = async (req, res) => {
    try {

        // const event = await Event.create(req.body);

        // res.status(201).json(event);
        

    const {name , venue , date , price , totalTickets, organizerWallet} = req.body;


    const metadata = {
         name,
         description : ``
    }
      
        
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