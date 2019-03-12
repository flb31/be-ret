'use strict'

var jwt = require('jwt-simple')
var moment = require('moment')
var config = require('../config')

exports.ensureAuth = function(req, res, next) {
    if(!req.headers.authorization) {
        return res.status(403).send({
            message: 'Forbidden'
        })
    }

    var token = req.headers.authorization.replace(/['"]+/g, '')

    try {
        var payload = jwt.decode(token, config.JWT_SECRET_KEY)
        
        // Verify date
        if(!payload.exp || payload.exp < moment().unix()) {
            return res.status(401).send({
                message: 'Token is not valid'
            })
        }

    } catch(ex) {
        console.log(ex)
        return res.status(401).send({
            message: 'Token invalid'
        })
    }


    req.user = payload
    next()
}