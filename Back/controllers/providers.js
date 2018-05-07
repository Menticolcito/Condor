//Controller to interect with the database
const Provider = require('../models/providers')

//Post new Provider
function createProvider(req, res){
    let provider = new Provider()
    provider.assignedTo = req.body.assignedTo
    provider.createdBy = req.body.createBy
    provider.email = req.body.email
    provider.employerId = req.body.employerId
    provider.firstName = req.body.firstName
    provider.lastName = req.body.lastName
    provider.middleName = req.body.middleName
    provider.projectedStartDate = req.body.projectedStartDate
    provider.providerType = req.body.providerType
    provider.staffStatus = req.body.staffStatus
    provider.specialties = req.body.specialties
    provider.status = req.body.status
    provider.updatedBy = req.body.updateBy

    provider.save((err, createdProvider) => {
        if(err) 
            return res.status(500).send({ message: "DB Error"})
        
        res.status(200).send( {provider: createdProvider })
    })
}

//Get all Providers
function getAllProviders(req, res){
    Provider.find({}, (err, providers) => {
        if(err) 
            return res.status(500).send({ message: "Request Error"})
        if(!providers) 
            return res.status(404).send({ message: "Provider Not Found"})

        res.send(200, { providers })
    })
}

//Get one Provider
function getOneProvider(req, res){
    let id = req.params.providerId
    Provider.findById(id, (err, provider) => {
        if(err) 
            return res.status(500).send({ message: "Request Error"})
        if(!provider) 
            return res.status(404).send({ message: "Provider Not Found"})

        res.status(200).send({ provider })
    })
}
