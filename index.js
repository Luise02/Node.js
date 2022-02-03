'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3900;


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/api_rest_blog', { useUnifiedTopology: true })
    .then(() => {
        console.log('Conexion a la base de datos correcta !!');

        // Crear servidor y ponerme a escuchar peticiones HTTP
        app.listen(port, () => {
            console.log('Servidor corriendo en http://localhost:' + port);
        });
    });


