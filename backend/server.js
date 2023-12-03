require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const productRoutes = require('./routes/products')
const userRoutes = require('./routes/user')

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/products', productRoutes)
app.use('/api/user', userRoutes)

// connect to db
mongoose.connect("mongodb+srv://chandupa:Mattegoda11@cluster0.lmur7fr.mongodb.net/")
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })