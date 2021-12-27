const mysql = require('mysql');

//mysql
var connection;
connection = mysql.createConnection({
  host: 'localhost',
  user: 'oliverPatito',
  password: 'Oliver12345',
  database: 'patitobd'
});

// verificar coneccion

connection.connect(error =>{
    if(error) throw error;
    console.log('Conexión a la base de datos exitosa!');
  });

module.exports= connection;

  