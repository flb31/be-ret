'use strict'

var express = require('express')
var app = express()
var router = express.Router()
var SpecialtyController = require('../controllers/specialty')

router.get('/', SpecialtyController.index )
router.post('/', (req, res) => SpecialtyController.create )
router.put('/:id', (req, res) => SpecialtyController.update )
router.delete('/:id', (req, res) => SpecialtyController.delete )
app.use('/specialties', router)

module.exports = app
