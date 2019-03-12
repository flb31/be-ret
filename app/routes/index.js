'use strict'

var express = require('express')
var app = express()
var provider = require('./provider')
var specialty = require('./specialty')

app.use('/api', [provider, specialty])

module.exports = app
