const express = require('express');

const holamundo = express()

holamundo.get('/', (req, res) => {
    const result = 10/2;
    res.send("El resultado de la division " + result)




});

module.exports = holamundo