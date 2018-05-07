//Router for Specialties
const express = require('express')
const router = express.Router()
const controller = require('../controllers/specialties')

router.post('/specialtie', controller.createSpecialtie)
router.get('/specialties', controller.getAllSpecialties)
router.get('/specialtie/:specialtieId', controller.getOneSpecialtie)
router.put('/specialtie/:specialtieId', controller.updateSpecialtie)
router.delete('/specialtie/:specialtieId', controller.deleteSpecialtie)

module.exports = router