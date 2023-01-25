const express = require("express")
const router = express.Router()
const Users = require("../models/Users")

//Index  -- .get /photos/         -- display a list of all
router.get("/", (req, res) => {
  Users.find({}, (err, foundLocations) => {
    res.json(foundLocations)
  })
})

//New    -- handled by React app

// Delete a user
router.delete("/:id", (req, res) => {
  Users.findByIdAndDelete(req.params.id, (err, deletedUser) => {
    res.json(deletedUser)
  })
})

//update -- add a location
router.put("/:user", (req, res) => {
  Users.updateOne(
    { user: req.params.user },
    { $push: { locations: req.body } },
    { new: true },
    (err, updatedLocation) => {
      res.json(updatedLocation)
    }
  )
})

//update -- delete a location
router.delete("/:user", (req, res) => {
  Users.updateOne(
    { user: req.params.user },
    { $pull: { locations: { _id: req.body } } },
    { new: true },
    (err, updatedLocation) => {
      res.json(updatedLocation)
    }
  )
})

//Create -- new user
router.post("/", (req, res) => {
  Users.create(req.body, (err, createdUser) => {
    res.json(createdUser)
  })
})

//Edit   -- handled by react app

//Show   -- finds specified user arr of locations
router.get("/:user", (req, res) => {
  Users.find({ user: req.params.user }, (err, foundLocationsArr) => {
    res.json(foundLocationsArr)
  })
})

module.exports = router
