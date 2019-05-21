//me va a servir para configurar express, midelware, routes
//definir funcion y exportar, pero lo que se va a recibir es un objeto 'app' 
//function (){} o ()=>{}
const path = require('path');
const exphbs = require('express-handlebars');

const morgan = require('morgan');
const multer = require('multer');
const express = require('express');
const erroHandler = require('errorhandler');

const routes = require('../routes/index');

module.exports = app =>{
    
    //settings
    app.set('port', process.env.PORT || 3000);// si hay un puerto en el sistema se utiliza si no ocupa el puerto 3000
    app.set('views', path.join(__dirname, '../views'));//definir mi carpeta de vistas 'views'
    app.engine('.hbs', exphbs({
        defaultLayout: 'main',
        partialsDir: path.join(app.get('views'), 'partials'),//solo indica que la carpeta partials esta dentro de views
        layoutsDir: path.join(app.get('views'), 'layouts'),//solo indica que la carpeta layouts esta dentro de views
        extname: '.hbs',//decir conque extencion voy a nombrarlos
        helpers: require('./helpers') //este archivo es para hacer uso del handlebars
    })); //confiugrar el motor de plantillas

    app.set('view engine', '.hbs'); //declaracion del motor de plantillas

    //middlewares
    app.use(morgan('dev'));
    app.use(multer({dest: path.join(__dirname, '../public/upload/temp')}).single('image'));//para solo subir una imagen a la vez
    app.use(express.urlencoded());//para recibir datos que vengan desde formularios desde las plantillas html
    app.use(express.json()); //para evitar la recargas, hacer el uso de ajax

    //routes
    routes(app);

    //static files
    app.use('/public', express.static(path.join(__dirname, '../public')));

    //errorhandlers
    if('development' === app.get('env')){
        app.use(erroHandler);
    }

    return app;
}