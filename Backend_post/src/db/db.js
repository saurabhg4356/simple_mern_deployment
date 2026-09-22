const mongoose = require("mongoose")

async function connectDb(){
   await  mongoose.connect(process.env.MONGOOSE_KEY)
    console.log("connect to DB");
    
}
module.exports = connectDb