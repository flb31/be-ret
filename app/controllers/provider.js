'use strict'

var Provider = require('../models/provider')
var config = require('../config')

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
    res.status(201).send({ message: 'Provider create' })
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