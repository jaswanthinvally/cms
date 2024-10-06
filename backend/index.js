const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const port = process.env.PORT || 3000
const Db = require('./Db');
const UserRouter = require('./Routes/UserRouter');


app.use(express.json())

app.use("/api/v1",UserRouter)

Db.then(() => {
  console.log('Database connected successfully');
  
  
  app.listen(port, () => {
    console.log(`The server is running on port: ${port}`);
  });
})
.catch((err) => {
  console.error('Database connection failed:', err);
});

