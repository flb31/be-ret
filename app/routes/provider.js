'use strict'

var express = require('express')
var app = express()
var router = express.Router()
var ProviderController = require('../controllers/provider')

router.get('/', ProviderController.index )
router.post('/', ProviderController.create )
router.get('/:id', ProviderController.show )
router.put('/:id', ProviderController.update )
router.delete('/:id', ProviderController.remove )
app.use('/providers', router)

module.exports = app
