const express = require("express")
const router = express.Router()
const Location = require("../models/Locations")

//Index  -- .get /photos/         -- display a list of all
router.get("/", (req, res) => {
  Location.find({}, (err, foundLocations) => {
    res.json(foundLocations)
  })
})
//New    -- handled by React app
//Delete -- .delete /photos/:id   -- delete specific photo
router.get("/", (req, res) => {
  Location.findByIdAndDelete(req.params.id, (err, deletedLocation) => {
    res.json(deletedLocation)
  })
})

//Update -- .put /photos/:id      -- update specific photo
router.put("/:id", (req, res) => {
  Location.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedLocation) => {
    res.json(updatedLocation)
  })
})

//Create -- .post /photos/        -- create new photo
router.post("/", (req, res) => {
  Location.create(req.body, (err, createdLocation) => {
    res.json(createdLocation)
  })
})

//Edit   -- handled by react app
//Show   -- .get /photos/:id      -- display specific photo
router.get("/:id", (req, res) => {
  Location.findById(req.params.id, (err, foundLocation) => {
    res.json(foundLocation)
  })
})

module.exports = router
