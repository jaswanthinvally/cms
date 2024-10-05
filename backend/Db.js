const mongoose = require('mongoose')
const dotenv = require("dotenv")
dotenv.config()
const mongodb_url = process.env.MONGODB_URL


const Db  = mongoose.connect()
.then("the datbase is connected sucessfully")
.catch("database connection error")

module.exports = Db