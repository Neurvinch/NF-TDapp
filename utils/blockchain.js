 const {ethers} = require('ethers')

 require("dotenv").config();


 const provider = new ethers.JsonRpcProvider(process.env.ALCHEMY_URL);

 const wallet = new ethers.Wallet(process.env.WALLET_PRIVATE_KEY, provider);


 async function deployTicketContract(name, symbol,totalsupply) {
     

    // load the contract from hardhat
    const contractJson = require('')


    const factory = new ethers.ContractFactory(contractJson.abi, contractJson.bytecode, wallet)
 }