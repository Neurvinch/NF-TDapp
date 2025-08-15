 const {ethers} = require('ethers')

 require("dotenv").config();


 const provider = new ethers.JsonRpcProvider(process.env.ALCHEMY_URL);

 const wallet = new ethers.Wallet(process.env.WALLET_PRIVATE_KEY, provider);