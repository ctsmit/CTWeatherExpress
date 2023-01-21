const mongoose = require("mongoose")

const LocationsSchema = new mongoose.Schema({
  locations: [
    {
      city: String,
      state: String,
    },
  ],
})

module.exports = mongoose.model("Locations", LocationsSchema)
