const express = require('express');
const router = express.Router();
const app = express();

router.get('/', (req, res) => {
  res.render('index', { title: 'Iniciar Sesion' });
});

router.get('/admin', (req, res) => {
  res.render('admin', { title: 'Administrador' });
});

router.get('/saludo', function (req, res) {

	var nombre = req.query.nombre || '';	
  console.log(nombre);
  console.log("desde router");
  res.render('admin', { title: 'Administrador' });

});

module.exports = router;