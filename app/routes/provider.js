'use strict'

var express = require('express')
var app = express()
var router = express.Router()
var ProviderController = require('../controllers/provider')
var mdAuth = require('../middlewares/authenticated')

router.get('/page/:page', ProviderController.index )
router.post('/', mdAuth.ensureAuth, ProviderController.create )
router.get('/:id', ProviderController.show )
router.put('/:id', mdAuth.ensureAuth, ProviderController.update )
router.delete('/:id', mdAuth.ensureAuth, ProviderController.remove )
app.use('/providers', router)

module.exports = app
