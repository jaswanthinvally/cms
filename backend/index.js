const express = require('express')
const dotenv = require('dotenv')
const Db = require('./Db')
dotenv.config()
const port = process.env.PORT
const app = express()


Db()
app.listen(port, () => console.log(`the server is running on the port ${port}`))

