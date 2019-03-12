'use strict'

var express = require('express')
var app = express()
var router = express.Router()

router.get('/', (req, res) => res.send('Specialties GET') )
router.post('/', (req, res) => res.send('Specialties POST') )
router.put('/:id', (req, res) => res.send('Specialties PUT') )
router.delete('/:id', (req, res) => res.send('Specialties DELETE') )
app.use('/specialties', router)

module.exports = app
