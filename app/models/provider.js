'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongoosePaginate = require('mongoose-paginate-v2')

var ProviderSchema = Schema({
    firstName: String,
    lastName: String,
    middleName: String,
    email: String,
    specialty: {
        type: Schema.ObjectId,
        ref: 'Specialty'
    },
    status: String,
    createdAt: Date,
    updatedAt: Date,
})

ProviderSchema.plugin(mongoosePaginate)

module.exports = mongoose.model('providers', ProviderSchema)
