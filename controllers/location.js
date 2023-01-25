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
//Delete -- .delete /photos/:id   -- delete specific photo
// router.delete("/:id", (req, res) => {
//   Users.findByIdAndDelete(req.params.id, (err, deletedLocation) => {
//     res.json(deletedLocation)
//   })
// })

//Update -- .put /photos/:id      -- update specific photo
// add a location
router.put("/:email", (req, res) => {
  Users.updateOne(
    { email: req.params.email },
    { $push: { locations: req.body } },
    { new: true },
    (err, updatedLocation) => {
      res.json(updatedLocation)
    }
  )
})
//delete a location
router.delete("/:id", (req, res) => {
  Users.updateOne(
    { user: req.body.user },
    {$pull: {locations: {_id: req.params.id,},},},
    { new: true },
    (err, updatedLocation) => {
      console.log(updatedLocation)
      res.json(updatedLocation)
    }
  )
})

//Create -- .post /photos/        -- create new photo
router.post("/", (req, res) => {
  Users.create(req.body, (err, createdUser) => {
    res.json(createdUser)
  })
})

//Edit   -- handled by react app
//Show   -- .get /photos/:id      -- display specific photo
router.get("/:user", (req, res) => {
  Users.find({ user: req.params.user }, (err, foundLocationsArr) => {
    res.json(foundLocationsArr)
  })
})

module.exports = router
