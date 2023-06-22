const express = require('express');

const holamundo = express()

holamundo.get('/', (req, res) => {
        const result= 59+20-10
        res.send("Resultado:  " + result) } ); 



module.exports = holamundo