'use strict'

var express = require('express')
var app = express()
var router = express.Router()
var SpecialtyController = require('../controllers/specialty')
var mdAuth = require('../middlewares/authenticated')

router.get('/', SpecialtyController.index )
router.post('/', mdAuth.ensureAuth, SpecialtyController.create )
router.get('/:id',  SpecialtyController.show )
router.put('/:id', mdAuth.ensureAuth, SpecialtyController.update )
router.delete('/:id', mdAuth.ensureAuth, SpecialtyController.remove )
app.use('/specialties', router)

module.exports = app
