const express = require('express');

const holamundo = express()

holamundo.get('/', (req, res) => res.send('This a test for CI/CD'))

module.exports = holamundo