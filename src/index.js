const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const body_parser = require('body-parser');



app.use(body_parser.urlencoded({extended:true}));
app.use(body_parser.json());

// Configuraciòn
//puerto
app.set('port', process.env.PORT || 5000);
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');


// middlewares
app.use(morgan('dev'));
//guardar datos
app.use(express.urlencoded({extended:false}));
app.use(express.json());
// routes
app.use(require('./routes'));

// archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

// llamado a servidor

app.listen(app.get('port'), () => {
  console.log('Servidor en puerto: ', app.get('port'));
});
