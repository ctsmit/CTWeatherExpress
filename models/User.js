const mongoose = require("mongoose")
// import Locations from "./Locations"

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  locations: [],
})

module.exports = mongoose.model("User", UserSchema)
