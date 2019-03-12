'use strict'

var Specialty = require('../models/specialty')
var config = require('../config')

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
    res.status(201).send({ message: 'Specialty create' })
}

function update(req, res) {
    res.status(200).send({ message: 'Specialty update' })
}

function show(req, res) {
    res.status(200).send({ message: 'Specialty get' })
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