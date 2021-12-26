const express = require('express');
const router = express.Router();


let administrador = 'Marco';
let passAdministrador='1234';
let secretaria = 'Juana';
let passSecretaria='1234';
let laboratorista = 'Ale';
let passLaboratorista='1234';

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

//importando la conexion
router.get('/prueba', (req, res) => {
  
  let connection = require('./index.js');
  
  const sql = 'SELECT * FROM horarios';

  connection.query(sql,(error,result)=>{

    if(error) throw

  });

});

router.get('/horariosSecretaria', (req, res) => {
  let hola = require('./index.js');
  res.render('sin nada');
});

router.post('/Proceder', function (req, res) {
	nombre = req.body.nombre|| '';	
  var password = req.body.password|| '';	
  if(nombre==administrador&&password==passAdministrador){
    res.render('./administrador/administrador', { title: 'Administrador' });
    console.log("Precondiciones");
    console.log("Necesita logearse como administrador");
  }else if(nombre==secretaria&&password==passSecretaria){
    res.render('./secretaria/secretariaIndex', { title: 'Secretaria' });
  }else if(nombre==laboratorista&&password==passLaboratorista){
    res.render('laboratorista', { title: nombre, opcion: 1});
  }else{
    res.render('index', { title: 'Iniciar Sesion' });
  }
});
router.get('/Proceder', function(req,res){
  const op = req.query.opcion || '';

  res.render('laboratorista', { title: nombre, opcion: op});
});
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