const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
// const methodOverride = require('method-override')
require('dotenv').config()

const locationController = require('./controllers/location')
const Locations = require('./models/Locations')
const data = require("./utilities/data")

const mongoURI = process.env.MONGO_URI
const PORT = process.env.PORT || 3001

// Middleware
// app.use(express.urlencoded({ extended: false }))
app.use(express.json()); //use .json(), not .urlencoded()
app.use(express.static('public'))
// app.use(methodOverride('method'))
app.use(cors())

// setting up mongoose------------------------------------------
mongoose.set('strictQuery', false)
mongoose.connect(mongoURI, () => {console.log('connected to MongoDB')}, (e) => console.error(e))

// Seed route - populate the database for testing
app.get('/seed', async (req, res) => {
  await Locations.deleteMany({})
  await Locations.insertMany(data)
  res.send('done')
})

app.use('/locations', locationController) // telling server.js to get the routes from controllers/todos


app.listen(PORT, () => console.log('listening'))   