const express = require('express');
const router = express.Router();
const app = express();

router.get('/', (req, res) => {
  res.render('index', { title: 'Iniciar Sesion' });
});

router.get('/admin', (req, res) => {
  res.render('admin', { title: 'Administrador' });
});



module.exports = router;