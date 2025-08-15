 const {ethers} = require('ethers')

 require("dotenv").config();


 const provider = new ethers.JsonRpcProvider(process.env.ALCHEMY_URL);

 const wallet = new ethers.Wallet(process.env.WALLET_PRIVATE_KEY, provider);


 async function deployTicketContract(name, symbol,totalsupply) {
     

    // load the contract from hardhat
    const contractJson = require('')


    const factory = new ethers.ContractFactory(contractJson.abi, contractJson.bytecode, wallet)


    console.log( " deploying...")


    const contract = await factory.deploy(name, symbol , totalsupply);

    await contract.waitForDeployment()

    const address = await contract.getAddress()

    console.log("Contract deployed at address:", address)


    return address
 }

 module.exports = {deployTicketContract}