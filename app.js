const express = require('express')
const app = express()
const puerto = 4500
const path = require('path')
const home = require('./routes/rutas')
const signup = require('./routes/rutas')


app.use(express.static('public'))

// Configuración de plantilla EJS
app.set('view engine', 'ejs')


app.use('/', home)
app.use('/signup', signup)


// Iniciar el servidor
app.listen(puerto, () => {
    console.log(`El servidor esta funcionando en el puerto http://localhost:${puerto} `);
});
