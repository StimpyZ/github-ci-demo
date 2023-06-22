const express = require('express');

const holamundo = express()

holamundo.get('/', (req, res) => {
    const a = 2400;
    const b = 1200
    const result = a + b
    res.send(`El resultado de la suma ${a} + ${b} es: ${result}`)
});

module.exports = holamundo