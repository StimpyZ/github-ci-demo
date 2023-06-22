const express = require('express');

const holamundo = express()

holamundo.get('/', (req, res) => {
    const var1 = 13;
    const var2 = 18;
    const resultado = var1*var2;
    res.send("El resultado de la multiplicacion es: " + resultado)

});
module.exports = holamundo