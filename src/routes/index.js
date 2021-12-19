const express = require('express');
const router = express.Router();
const app = express();

router.get('/', (req, res) => {
  res.render('index', { title: 'Iniciar Sesion' });
});

router.post('/validar', (req, res) => {
  let nombre = req.body.nombre || '';
  console.log(nombre);
});

router.get('/Admin', (req, res) => {
  res.render('admin', { title: 'Administrador' });
});

module.exports = router;