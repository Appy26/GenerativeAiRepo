const express = require('express');
const { connection } = require('./config/db');
const UserRoute = require('./routes/user.route');
require('dotenv').config();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send({ "msg": "Welocme to homepage" })
})

app.use("/user", UserRoute)

app.listen(process.env.port, async () => {
  try {
    await connection
    console.log("connected to database")
  } catch (error) {
    console.log(error.message)
  }
  console.log("connected to server")
})