var mongoose = require('mongoose')

function isValidateId(id) {
    return mongoose.Types.ObjectId.isValid(id)
}

module.exports = {
    isValidateId,
}