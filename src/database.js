const mongoose = require('mongoose');//require mongoose para hacer conxion a la base de datos

const { database } = require('./keys'); // solo para acceder a cierta partes de mi objetos json de mi carpeta keys {entre corchetes la seccion que se va a requerir}

mongoose.connect(database.URI, {
    useNewUrlParser: true
}) 
    .then(db => console.log('DB is conected.!'))//devuelve un objeto 'db' para dar info.
    .catch(err => console.err(err));