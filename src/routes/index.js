const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Iniciar Sesion' });
});

router.get('/Administrador', (req, res) => {
  res.render('admin', { title: 'Administrador' });
});

module.exports = router;