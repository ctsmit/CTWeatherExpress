const express = require("express")
const mongoose = require("mongoose")
const app = express()
const cors = require("cors")
require("dotenv").config()

const locationController = require("./controllers/location")
const Users = require("./models/Users")
const data = require("./utilities/data")

const mongoURI = process.env.MONGO_URI
const PORT = process.env.PORT || 3001

// Middleware
app.use(express.json())
app.use(express.static("public"))
app.use(cors({ origin: "*" })) //whitelists requests?

// setting up mongoose------------------------------------------
mongoose.set("strictQuery", false)
mongoose.connect(
  mongoURI,
  () => {
    console.log("connected to MongoDB")
  },
  (e) => console.error(e)
)

// Seed route - populate the database for testing
app.get("/seedmedaddy", async (req, res) => {
  await Users.deleteMany({})
  await Users.insertMany(data)
  res.send("seeding successful hehe")
})

app.use("/users", locationController)

app.listen(PORT, () => console.log("listening"))
