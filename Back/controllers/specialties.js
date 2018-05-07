//Controller to interect with the database
const Specialtie = require('../models/specialties')

//Post new Specialtie
function createSpecialtie(req, res){
    let specialtie = new Specialtie()
    specialtie.createdBy = req.body.createdBy
    specialtie.name = req.body.name
    specialtie.updatedBy = req.body.updatedBy

    Specialtie.save((err, createdSpecialtie) => {
        if(err) 
            return res.status(500).send({ message: "DB Error"})
        
        res.status(200).send( {Specialtie: createdSpecialtie })
    })
}

//Get all Specialties
function getAllSpecialties(req, res){
    Specialtie.find({}, (err, specialties) => {
        if(err) 
            return res.status(500).send({ message: "Request Error"})
        if(!specialties) 
            return res.status(404).send({ message: "Specialtie Not Found"})

        res.send(200, { specialties })
    })
}

//Get one Specialtie
function getOneSpecialtie(req, res){
    let id = req.params.specialtieId
    Specialtie.findById(id, (err, specialtie) => {
        if(err) 
            return res.status(500).send({ message: "Request Error"})
        if(!specialtie) 
            return res.status(404).send({ message: "Specialtie Not Found"})

        res.status(200).send({ specialtie })
    })
}

//Put one Specialtie
function updateSpecialtie(req, res){
    let id = req.params.specialtieId
    let content = req.body
    Specialtie.findByIdAndUpdate(id, content, (err, newSpecialtie) => {
        if(err) 
            return res.status(500).send({ message: "Request Error"})

        res.status(200).send({ specialtie: newSpecialtie })
    })
}

//Delete Specialtie
function deleteSpecialtie(req, res){
    let id = req.params.specialtieId

    Specialtie.findById(id, (err, specialtie) => {
        if(err) 
            return res.status(500).send({ message: "Request Error"})
        specialtie.remove(err => {
            if(err) 
                return res.status(500).send({ message: "Delete Error"})
            
            res.status(200).send({ message: "Specialtie Deleted" })
        })
    })
}

module.exports = {
    createSpecialtie,
    getAllSpecialties,
    getOneSpecialtie,
    updateSpecialtie,
    deleteSpecialtie,
}