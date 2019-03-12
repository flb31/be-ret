'use strict'

var Specialty = require('../models/specialty')
var config = require('../config')
var mongoose = require('mongoose');
var moment = require('moment');

function index(req, res) {
    const page = req.params.page ? req.params.page : config.pagination.page
    const options = {
        ...config.pagination,
        page,
    }

    Specialty.paginate({}, options, (err, resPaginate) => {
        res.status(200).send( resPaginate )
    })
}

function create(req, res) {
    
    var specialty = new Specialty()

    var params = req.body

    specialty.name = params.name
    specialty.createdAt = moment().format()
    specialty.updatedAt = specialty.createdAt
    
    if(!specialty.name) {
        return res.status(400).send({message: 'Name is required'})
    }

    specialty.save((err, specialtyStored) => {
        if(err) {
            return res.status(500).send({
                message: 'Error save specialty',
                err,
            })
        }

        if(!specialtyStored) {
            return res.status(404).send({message: 'Specialty not created'})
        }

        res.status(201).send({ specialty: specialtyStored })
    })
    
}

function update(req, res) {
    res.status(200).send({ message: 'Specialty update' })
}

function show(req, res) {
    var id = req.params.id

    if( !mongoose.Types.ObjectId.isValid(id) ) {
        return res.status(400).send({ message: 'Invalid id' })
    }

    const _id = mongoose.Types.ObjectId(id)

    Specialty.findById(id).populate().exec( (err, specialty) => {
        
        if(err) {
            return res.status(500).send({
                message: 'Error when founded specialty ',
                err
            })
        }

        if(!specialty) {
            return  res.status(404).send({
                message: 'Specialty not found',
            })
        }

        res.status(200).send(specialty)
    })
}

function remove(req, res) {
    res.status(204).send({ message: 'Specialty delete' })
}

module.exports = {
    index,
    create,
    update,
    show,
    remove,
}