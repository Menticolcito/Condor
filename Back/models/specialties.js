//Mongoose Schema for specialties
const mongoose = require("mongoose")

const schema = mongoose.Schema({
    createdBy: String,
    name: String,
    updatedBy: String
})

module.exports = mongoose.model("Specialties", schema)