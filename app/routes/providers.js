'use strict'

var express = require('express')
var app = express()
var router = express.Router()

router.get('/', (req, res) => res.send('Providers LIST') )
router.post('/', (req, res) => res.send('Provider POST') )
router.get('/:id', (req, res) => res.send('Provider GET') )
router.put('/:id', (req, res) => res.send('Provider PUT') )
router.delete('/:id', (req, res) => res.send('Provider DELETE') )
app.use('/providers', router)

module.exports = app
