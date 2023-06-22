const express = require('express');

const holamundo = express()

holamundo.get('/', (req, res) => {
    const a = 318;
    const result = 318**2
    res.send(`El resultado ${a} elevado a la 2 es: ${result}`)
});
module.exports = holamundo