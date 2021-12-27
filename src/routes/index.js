const express = require('express');
const router = express.Router();
const lab  = require('./laboratorista');
const {encrypt, compare } = require('./../extra/encriptar');
const {tokenSign, verifyToken, decodeSing} = require('./../extra/generateToken');
const body_parser = require('body-parser');
let laboratorista = {
  rol: 'laboratorista',
  nombre: 'Ale',
  password: '$2a$10$bTXb/uRl5aFF5nxHtlD04.Q6YaoanfQMrySIRD4yIpFo.o7SrsqHW'
}
let administrador = 'Marco';
let passAdministrador='1234';
let secretaria = 'Juana';
let passSecretaria='1234';

// Iniciar sesion en los diferentes usuarios

//Secretaria
router.get('/secretariaIndex', (req, res) => {
  res.render('./secretaria/secretariaIndex', { title: 'Inicio' });
});

router.get('/ingresarPaciente', (req, res) => {
  res.render('./secretaria/ingresarPaciente', { title: 'Registro' });
});

router.get('/resultadosSecretaria', (req, res) => {
  res.render('./secretaria/resultadosSecretaria', { title: 'Resultados' });
});


router.get('/horariosSecretaria', (req, res) => {
  
  res.render('./secretaria/horariosSecretaria', { title: 'Horarios' });

});

//importando la conexion
router.get('/pp', (req, res) => {
  
  const con = require('.././database/db.js');

  const sql = 'SELECT * FROM usuario';

  con.query(sql,function (err,result,fields) {
    if(err) throw err;
    console.log(result);
  });

  con.end;
/*
  con.query(sql,(error,results)=>{
    if(error) throw error;
    if(results.length>0){
      res.json(results);
    }else{
      res.send('sin resutlados');
    }
  });*/

});

let nombre, tokenSession = ''; 
const conexion = require('.././extra/db');
const sql = 'SELECT * FROM usuario';
// Iniciar sesion en los diferentes usuarios
router.get('/', (req, res) => {
  res.render('index', { title: 'Iniciar Sesion' });
});

//validar credenciales de los usuarios al momento de logiarse
router.post('/Proceder', async (req, res) => {
	nombre = req.body.nombre|| '';	  
  const password = req.body.password|| '';


  if(nombre==administrador&&password==passAdministrador){
    res.render('./administrador/administrador', { title: 'Administrador' });
    console.log("Precondiciones");
    console.log("Necesita logearse como administrador");
  }else if(nombre==secretaria&&password==passSecretaria){
    res.render('./secretaria/secretariaIndex', { title: 'Secretaria' });
  }else if(nombre==laboratorista.nombre && await compare(password, laboratorista.password)){

    tokenSession = await tokenSign(laboratorista);
    console.log(tokenSession);
    res.redirect('/laboratorista');
    //res.send({data: user, tokenSession});

  }else{
    res.status(404).redirect('/');
  }
});
//rutas de laboratorista
lab(router , laboratorista.nombre );


//router administrador
router.get('/administrador', (req, res) => {
  res.render('./administrador/administrador', { title: 'Iniciar Sesion Administrador' });
  console.log("Precondiciones");
  console.log("Necesita logearse como administrador");
});
router.get('/administrador/examenes', (req, res) => {
  res.render('./administrador/examenes', { title: 'Examenes Admin' });
  console.log("Precondiciones");
  console.log("Deben existir examenes");
});
router.get('/administrador/reportes', (req, res) => {
  res.render('./administrador/reportes', { title: 'Reportes Admin' });
  console.log("Precondiciones");
  console.log("Deben haber sido procesados los reportes");
});
router.get('/administrador/usuarios', (req, res) => {
  conexion.query(sql,function (error,results) {
    if(error) throw error;
    else{
      res.render('./administrador/usuarios',{results:results});
    }
  });
  console.log("Precondiciones");
  console.log("Deben haber usuarios");
  conexion.end;
});
router.get('/administrador/corteMes', (req, res) => {
  res.render('./administrador/corteMes', { title: 'Corte del Mes' });
  console.log("Precondiciones");
  console.log("Haber procesado examenes");
  console.log("Ser fin de mes");
});
router.get('/administrador/roles', (req, res) => {
  res.render('./administrador/roles', { title: 'Roles' });
  console.log("Precondiciones");
  console.log("Sin precondiciones");
});
//CRUD USUARIO
const crudUsuario = require('../views/administrador/crud/crudUsuario');
router.post('/saveUsuario',crudUsuario.saveUsuario);
router.get('/editarUsuario/:idUsuario',(req,res)=>{
  const idUsuario=req.params.idUsuario;
  conexion.query('SELECT * FROM usuario WHERE idUsuario=?',[idUsuario],(error,results)=>{
    if(error){
      console.log(error);
  }else{
      res.render('./administrador/crud/editarUsuario',{usuario:results[0]});
  }
  })
})
router.post('/subirUsuario',crudUsuario.subirUsuario);
module.exports = router;