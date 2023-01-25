const mongoose = require("mongoose")
// import Locations from "./Locations"

const UserSchema = new mongoose.Schema({
  user: { type: String, required: true },
  locations: [
    {
      city: String,
      state: String,
    },
  ],
})

module.exports = mongoose.model("Users", UserSchema)
