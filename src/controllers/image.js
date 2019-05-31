const path = require('path');
const { randomNumber } = require('../helpers/libs');
//Un controlador es un objeto con funciones
const ctrl ={};

ctrl.index = (req, res)=>{
    
};

ctrl.create = (req, res)=>{
    const imgUrl= randomNumber();
    console.log(imgUrl);
    const imageTempPath = req.file.path;
    const ext = path.extname(req.file.originalname).toLowerCase(); //para obtener la extension de la imagen
    const targetPath = path.resolve('src/public/upload/${imgUrl}${ext}');

    res.send('Works!');
};

ctrl.like = (req, res)=>{
    
};

ctrl.comment = (req, res)=>{
    
};

ctrl.remove = (req, res)=>{
    
};

module.exports = ctrl;