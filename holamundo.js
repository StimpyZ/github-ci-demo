const express = require('express');

const holamundo = express()

holamundo.get('/', (req, res) => {
    const result = 56*2;
    res.send("El resultado de la multiplicacion es: " + result)

});
module.exports = holamundo