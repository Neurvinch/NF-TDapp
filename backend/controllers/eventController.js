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
         description : `Ticket for ${name} at ${venue} on ${date}`,
         attributes: [
            {trait_type: "Venue", value: venue},
            {trait_type: "Date", value: date},
            {trait_type: "Price", value: price},
            {trait_type: "Total Tickets", value: totalTickets},
            {trait_type: "Organizer Wallet", value: organizerWallet}
    ]
    } 

    const IpfsHash = await uploadJSONToIPFS(metadata);

    const contractAddress = await deployTicketContract(name, "TIX", totalTickets)


    const event = await
      
        
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