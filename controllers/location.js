const express = require("express")
const router = express.Router()
const Locations = require("../models/Locations")

//Index  -- .get /photos/         -- display a list of all
router.get("/", (req, res) => {
  Locations.find({}, (err, foundLocations) => {
    res.json(foundLocations)
  })
})
//New    -- handled by React app
//Delete -- .delete /photos/:id   -- delete specific photo
router.delete("/:id", (req, res) => {
  Locations.findByIdAndDelete(req.params.id, (err, deletedLocation) => {
    res.json(deletedLocation)
  })
})

//Update -- .put /photos/:id      -- update specific photo
router.put("/:id", (req, res) => {
  Locations.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedLocation) => {
    res.json(updatedLocation)
  })
})

//Create -- .post /photos/        -- create new photo
router.post("/", (req, res) => {
  Locations.create(req.body, (err, createdLocation) => {
    res.json(createdLocation)
  })
})


//Edit   -- handled by react app
//Show   -- .get /photos/:id      -- display specific photo
router.get("/:id", (req, res) => {
  Locations.findById(req.params.id, (err, foundLocation) => {
    res.json(foundLocation)
  })
})

module.exports = router
