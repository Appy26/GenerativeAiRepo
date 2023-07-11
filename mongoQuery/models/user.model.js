const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  address: String,
  phone_number: String
})

const UserModel = mongoose.model("user", userSchema)

module.exports = UserModel