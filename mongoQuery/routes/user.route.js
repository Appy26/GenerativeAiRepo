const express = require('express');
const UserModel = require('../models/user.model');


const UserRoute = express.Router();

UserRoute.post('/add', async (req, res) => {
  try {
    let { name, email, address, phone_number } = req.body;
    let user = new UserModel({ name, email, address, phone_number });
    user.save();
    res.send({ "msg": "new user added successfully" });
  } catch (error) {
    res.send({ "msg": error.message })
  }
})

UserRoute.get("/alluser", async (req, res) => {
  try {
    let users = await UserModel.find();
    res.send({ "users": users })
  } catch (error) {
    res.send({ "msg": error.message })
  }
})

UserRoute.get("/emailandname", async (req, res) => {
  try {
    let users = await UserModel.find();
    let arr = [];
    for (let i = 0; i < users.length; i++) {
      let obj = { name: users[i].name, email: users[i].email }
      arr.push(obj)
    }
    res.send({ "msg": arr })
  } catch (error) {
    res.send({ "msg": error.message })
  }
})


UserRoute.get("/search", async (req, res) => {
  let query = req.query
  console.log(query)
  let output = await UserModel.find({ email: { $regex: query.email } })
  res.send({ output })
})

UserRoute.get("/top3user", async (req, res) => {
  try {
    let users = await UserModel.find().limit(3);
    res.send({ "users": users })
  } catch (error) {
    res.send({ "msg": error.message })
  }
})

UserRoute.get("/:id", async (req, res) => {
  let Id = req.params.id;
  try {
    let user = await UserModel.find({ _id: Id })
    res.send({ "msg": user })
  } catch (error) {
    res.send({ "msg": error.message })
  }
})

UserRoute.patch("/update/:id", async (req, res) => {
  try {
    let updated = req.body;
    let Id = req.params.id;
    await UserModel.findByIdAndUpdate({ _id: Id }, updated)
    res.send({ "msg": "updated" })
  } catch (error) {
    res.send({ "msg": error.message })
  }
})
UserRoute.patch("/delete/:id", async (req, res) => {
  try {
    let Id = req.params.id;
    await UserModel.findByIdAndDelete({ _id: Id })
    res.send({ "msg": "Deleted" })
  } catch (error) {
    res.send({ "msg": error.message })
  }
})

module.exports = UserRoute