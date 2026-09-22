const {ImageKit} = require("@imagekit/nodejs");
const { model } = require("mongoose");

const imageKit = new ImageKit({
    privateKey: process.env.IMAGE_PRIVATE_KEY
})

async function uploadFile(buffer){
    console.log(buffer);

    const result = await imageKit.files.upload({
        file:   buffer.toString("base64"),
        fileName : "image.jpg"
    })

    return result;
    
}
module.exports = uploadFile;