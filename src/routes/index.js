const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Iniciar Sesion' });
});

router.get('/Admin', (req, res) => {
  res.render('admin', { title: 'Administrador' });
});

module.exports = router;