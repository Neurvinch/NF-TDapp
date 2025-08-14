const mongoose = require('mongoose')

const ticketSchema = new mongoose.Schema({

    eventId: {type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true},
    tokenId: {type: Number, required: true},
    ownerWallet: {type: String, required: true},

    checkedIn: {type: Boolean, default: false},
}, {timestamps: true})


module.exports = mongoose.model("Ticket", ticketSchema)