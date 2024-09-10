const mongoose = require('mongoose')
require('dotenv').config()

exports.PORT = process.env.PORT
exports.PUBLIC_KEY = process.env.PUBLIC_KEY
exports.JSON_PRIVATE_KEY = process.env.JSON_PRIVATE_KEY

exports.connectDB =async()=>{
    try{
        const con = await mongoose.connect(process.env.MONGO_URI, {dbName: "look"})
        console.log(`[Info] Database connected: ${con.connection.host}`)
    }catch(err){
        console.log(`[Error] Database error ${err.message}`)
        process.exit(1)
    }
}