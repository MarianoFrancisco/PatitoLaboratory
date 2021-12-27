const express = require('express');
const router = express.Router();
const lab  = require('./laboratorista');
const {encrypt, compare } = require('./../extra/encriptar');
const {tokenSign, verifyToken, decodeSing} = require('./../extra/generateToken');
const initDB = require('./../extra/db');
// Iniciar sesion en los diferentes usuarios
router.get('/', (req, res) => {
  res.render('index', { title: 'Iniciar Sesion' });
});


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

let nombre, tokenSession = ''; 

//validar credenciales de los usuarios al momento de logiarse
router.post('/Proceder', async (req, res) => {
	nombre = req.body.nombre|| '';	  
  const password = req.body.password|| '';

  const connect = initDB.connect();
  connect.query('SELECT * FROM usuario WHERE usuario = ?',[nombre],async (error, results, fields) =>{
    if (error)
      throw error;
    
    if(results[0] != undefined){
      let tipo = results[0].tipoUsuario;
      let passwordd = results[0].passwordUsuario;
      console.log(results[0]);
      if (await compare(password,passwordd)) {
        if(tipo==1){
          res.render('./administrador/administrador', { title: 'Administrador' });
      
        }else if(tipo==2){
          res.render('./secretaria/secretariaIndex', { title: 'Secretaria' });
      
        }else if(tipo==3){
          //tokenSession = await tokenSign(result);
          //console.log(tokenSession);
          res.redirect('/laboratorista');
          //res.send({data: user, tokenSession});
      
        }else{ res.status(404).redirect('/'); }
      }else{ res.status(404).redirect('/'); }
    }else{ res.status(404).redirect('/'); }
  });
  connect.end();
  
});
//rutas de laboratorista
lab(router , nombre);


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
  res.render('./administrador/usuarios', { title: 'Usuarios Admin' });
  console.log("Precondiciones");
  console.log("Deben haber usuarios");
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

module.exports = router;