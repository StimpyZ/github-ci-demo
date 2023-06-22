const express = require('express');

const holamundo = express()
const suma = express()

holamundo.get('/', (req, res) => res.send('This a test for CI/CD'))

suma.get('/', (req, res) => res.send(6 + 6))

module.exports = holamundo