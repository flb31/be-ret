'use strict'

var Provider = require('../models/provider')

function index(req, res) {
    res.status(200).send({ message: 'Providers' })
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