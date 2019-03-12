if(process.env.ENVIROMENT === 'local') {
    var config = require('./local')

    module.exports = config
} // Create others enviroments (development, staging, production) ...
