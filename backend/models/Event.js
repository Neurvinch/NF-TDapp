const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
    name : {type: String, required: true},
    venue: {type: String , required: true},
    date: {type: Date, required: true},
    price : {type: Number, required: true},
    totalTickets: {type: Number, required: true},
    contractAddress : {type: String},
    ipfsHash: {typr: String},
    organizerWallet: {type: String, required: true}
   
}, {
    timestamps: true});


    module.exports = mongoose.model("Event", eventSchema)