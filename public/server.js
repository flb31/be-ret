'use strict'

var app = require('../app')
var http = require('http')

/**
 * Get port from environment and store in Express.
 */

var port = process.env.PORT || 5000
app.set('port', port)

/**
 * Create HTTP server.
 */

app.listen(port, function() {
    console.log('Listen on http://localhost:' + port)
})
