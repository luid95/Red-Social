//Un controlador es un objeto con funciones
const ctrl ={};

ctrl.index = (req, res)=>{
    res.render('index');
};


module.exports = ctrl;