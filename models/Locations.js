const mongoose = require("mongoose")

const LocationsSchema = new mongoose.Schema({
  locations: [],
})

module.exports = mongoose.model("Locations", LocationsSchema)