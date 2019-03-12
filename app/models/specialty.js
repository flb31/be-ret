'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Int32 = require('mongoose-int32');
var mongoosePaginate = require('mongoose-paginate-v2')

var SpecialtySchema = Schema({
    name: String,
    createdBy: Int32,
    createdAt: Date,
    updatedBy: Int32,
    updatedAt: Date,
})

SpecialtySchema.plugin(mongoosePaginate)

module.exports = mongoose.model('specialties', SpecialtySchema)
