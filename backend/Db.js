const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const mongodb_url = process.env.MONGODB_URL;

const Db = mongoose.connect(mongodb_url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("The database is connected successfully");
  })
  .catch((err) => {
    console.error("Database connection failed:", err); // Log the actual error
  });

module.exports = Db;


