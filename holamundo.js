const express = require('express');

const holamundo = express()

holamundo.get('/', (req, res) => res.send('This a second test for CI/CD'))

module.exports = holamundo