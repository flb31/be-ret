'use strict'

var Provider = require('../models/provider')
var config = require('../config')
var moment = require('moment')
var stringUtil = require('../util/strings')
var mongoUtil = require('../util/mongo')

function index(req, res) {
    const page = req.params.page ? req.params.page : config.pagination.page
    const options = {
        ...config.pagination,
        populate: 'Specialty',
        lean: true,
        page,
    }

    Provider.paginate({}, options, (err, resPaginate) => {
        res.status(200).send( resPaginate )
    });
}

function create(req, res) {
    const provider = new Provider()

    const params = req.body

    provider.firstName = params.firstName
    provider.lastName = params.lastName
    provider.middleName = params.middleName
    provider.email = params.email
    provider.specialty = params.specialty
    provider.status = params.status
    provider.createdAt = moment().format()
    provider.updatedAt = provider.createdAt
    
    // Validations
    if(!provider.firstName) {
        return res.status(400).send({message: 'Name is required'})
    }

    if(!provider.lastName) {
        return res.status(400).send({message: 'Last Name is required'})
    }

    if( !stringUtil.isEmail(provider.email) ) {
        return res.status(400).send({message: 'Email is not valid'})
    }

    if(!stringUtil.isStatusValid(provider.status) ) {
        return res.status(400).send({message: 'Status is not valid'})
    }

    if( !mongoUtil.isValidateId(provider.specialty) ) {
        return res.status(400).send({message: 'Specialty ID is not valid'})
    }

    provider.save((err, providerStored) => {
        if(err) {
            return res.status(500).send({
                message: 'Error save provider',
                err,
            })
        }

        if(!providerStored) {
            return res.status(404).send({message: 'Provider not created'})
        }

        res.status(201).send({ provider: providerStored })
    })
}

function update(req, res) {
    res.status(200).send({ message: 'Provider update' })
}

function show(req, res) {
    res.status(200).send({ message: 'Provider get' })
}

function remove(req, res) {
    res.status(204).send({ message: 'Provider delete' })
}

module.exports = {
    index,
    create,
    update,
    show,
    remove,
}