require("@nomicfoundation/hardhat-toolbox")

require("dotenv").config()


module.exports = {
    solidity: "0.8.20",
    networks :{
        polygonAmony: {
            url: process.env.POLYGON_AMONYM_RPC_URL,
            accounts: [process.env.WALLET_PRIVATE_KEY]
        }
    }
}