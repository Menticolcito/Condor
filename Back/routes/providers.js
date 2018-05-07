//Router for providers
const express = require('express')
const router = express.Router()
const controller = require('../controllers/providers')

router.post('/provider', controller.createProvider)
router.get('/providers', controller.getAllProviders)
router.get('/provider/:providerId', controller.getOneProvider)
router.put('/provider/:providerId', controller.updateProvider)
router.delete('/provider/:providerId', controller.deleteProvider)

module.exports = router