const app = require('./holamundo')

const port = process.env.PORT || 3000

app.listen(port,
    () => console.log(`La applicacion está corriendo en http://localhost:${port}`))