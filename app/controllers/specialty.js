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
    
    const specialty = new Specialty()

    const params = req.body

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
    const id = req.params.id
    const specialty = req.body

    specialty.updatedAt = moment().format()

    if(validateId(id) ){
        return res.status(400).send({ message: 'Invalid id' })
    }

    Specialty.findByIdAndUpdate(id, specialty, (err, spUpdated) => {
        if(!spUpdated) {
            return res.status(404).send({
                message: 'Specialty Not Found',
            })
        }

        if(err) {
            return res.status(500).send({
                message: 'Error updating Specialty',
                err,
            })
        }

        res.status(200).send({
            message: 'Specialty updated',
            specialty: spUpdated
        })
    })
}

function show(req, res) {
    var id = req.params.id

    if(validateId(id) ){
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

    var id = req.params.id

    if(validateId(id) ){
        return res.status(400).send({ message: 'Invalid id' })
    }

    Specialty.findById(id).remove( (err) => {
        if(err) {
            return res.status(500).send({
                message: 'Error remove Specialty',
                err,
            })
        }

        return res.status(200).send({
            message: 'Specialty remove successfully'
        })
    })
}

function validateId(id) {
    return !mongoose.Types.ObjectId.isValid(id)
}

module.exports = {
    index,
    create,
    update,
    show,
    remove,
}