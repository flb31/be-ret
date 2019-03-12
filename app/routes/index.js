'use strict'

var express = require('express')
var app = express()
var providers = require('./providers')
var specialties = require('./specialties')

app.use('/api', [providers, specialties])

module.exports = app
