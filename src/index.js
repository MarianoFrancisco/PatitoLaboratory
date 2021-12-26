const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const body_parser = require('body-parser');
const mysql = require('mysql');


app.use(body_parser.urlencoded({extended:true}));
app.use(body_parser.json());

// Configuraciòn
//puerto
app.set('port', process.env.PORT || 5000);
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

//mysql
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'pedro',
  password: '202031683',
  database: 'laboratorio'
});

// exportando la conexion
module.exports = connection;


// verificar coneccion

connection.connect(error =>{
  if(error) throw error;
  console.log('Conexión exitosa!');
});

// middlewares
app.use(morgan('dev'));

// routes
app.use(require('./routes'));

// archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

// llamado a servidor

app.listen(app.get('port'), () => {
  console.log('Servidor en puerto: ', app.get('port'));
});
