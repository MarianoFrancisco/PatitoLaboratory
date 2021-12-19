const express = require('express');
const router = express.Router();
const app = express();
<<<<<<< HEAD
=======
//const password = 	document.getElementById("datoPassword");

let administrador = 'Marco';
let passAdministrador='1234';
let secretaria = 'Juana';
let passSecretaria='1234';
let laboratorista = 'Alejandro';
let passLaboratorista='1234';
>>>>>>> Mariano

router.get('/', (req, res) => {
  res.render('index', { title: 'Iniciar Sesion' });
});
<<<<<<< HEAD

router.post('/validar', (req, res) => {
  let nombre = req.body.nombre || '';
  console.log(nombre);
});

router.get('/Admin', (req, res) => {
  res.render('admin', { title: 'Administrador' });
=======
router.get('/pruebaCrud', (req, res) => {
  res.render('pruebaCrud', { title: 'Iniciar Sesion' });
});
router.post('/Proceder', function (req, res) {
	var nombre = req.body.nombre|| '';	
  var password = req.body.password|| '';	
  if(nombre==administrador&&password==passAdministrador){
    res.render('administrador', { title: 'Administrador' });
  }else if(nombre==secretaria&&password==passSecretaria){
    res.render('secretaria', { title: 'Secretaria' });
  }else if(nombre==laboratorista&&password==passLaboratorista){
    res.render('laboratorista', { title: 'Laboratorista' });
  }else{
    
    res.render('index', { title: 'Iniciar Sesion' });
  }
>>>>>>> Mariano
});
module.exports = router;