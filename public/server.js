'use strict'

var app = require('../app')
var config = require('../app/config')
var mongoose = require('mongoose')
var mdb = config.mongodb; 
var http = require('http')

/**
 * Get port from environment and store in Express.
 */

var port = process.env.PORT || 5000
app.set('port', port)

/**
 * Create HTTP server.
 */
mongoose.connect(`mongodb://${mdb.user}:${mdb.password}@${mdb.host}:${mdb.port}/${mdb.db}`, { useNewUrlParser: true }, (err) => {
    if(!err) {
        app.listen(port, function() {
            console.log('Listen on http://localhost:' + port)
        })
    } else {
        console.error('Does not connect to database')
        console.error(err)
    }
})

