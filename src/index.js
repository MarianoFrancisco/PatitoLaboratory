const express = require('express');
const morgan = require('morgan');
const path = require('path');
const router = require('./routes');
var body_parser = require('body-parser');
const app = express();
<<<<<<< HEAD

// settings
app.set('port', process.env.PORT || 3000);
=======
app.use(body_parser.urlencoded({extended:true}));
// Configuraciòn
app.set('port', process.env.PORT || 5000);
>>>>>>> Mariano
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'));

// routes
app.use(require('./routes'));

// archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));
router.post
// llamado a servidor
app.listen(app.get('port'), () => {
<<<<<<< HEAD
  console.log('Server on port', app.get('port'));
=======
  console.log('Servidor en puerto: ', app.get('port'));
>>>>>>> Mariano
});
