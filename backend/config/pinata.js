const axios = require("axios")
const FormData = require('form-data')

require("dotenv").config()

// pinarta api key

// pinata sec api key

async function uploadJSONToIPFS(jsonData) {
    const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`

    const res = await axios.post(url, jsonData, {
        headers: {
            // pinata key 

            // pinaata secret key
        }
    });


    return `ipfs://${res.data.IpfsHash}`
}

 async function uploadFileToIPFS(filepath) {
    const form = new FormData();

    form.append("file", require("fs").createReadStream(filepath));

    const res = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", form, { 
        maxBodyLength: "Infinity",

        headers: {
            // pinata key
            // pinata secret key
            ...form.getHeaders()
        }
    })

    return `ipfs://${res.data.IpfsHash}`

 }

 