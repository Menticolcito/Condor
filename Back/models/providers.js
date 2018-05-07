//Mongoose Schema for the providers
const mongoose = require("mongoose")

const schema = mongoose.Schema({
    assignedTo: Number,
    createdBy: Number,
    email: String,
    employerId: Number,
    firstName: String,
    lastName: String,
    middleName: String,
    projectedStartDate: Date,
    providerType: String,
    staffStatus: String,
    status: String,
    updatedBy: Number
})

module.exports = mongoose.model("Providers", schema)