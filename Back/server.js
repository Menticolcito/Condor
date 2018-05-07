//Dependencies
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

//Mongoose
const mongoose = require('mongoose')
const dbConfig = require('./dbconfig')

mongoose.Promise = global.Promise
mongoose.connect(dbConfig.url)
.then(
    () => {
        console.log("Connected")       
    }
).catch(
    err => {
        console.log("Connection Error")
        process.exit()
    }
)

//Using Router to manage CRUD
const providersRouter = require("./routes/providers")
const specialtiesRouter = require("./routes/specialties")

app.use(providersRouter)
app.use(specialtiesRouter)

//Run the server
app.listen(8080, () => {
    console.log("Magic at 8080");
})