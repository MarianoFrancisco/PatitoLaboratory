const mysql = require('mysql');

function connect() {

    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'usuario',
        password: 'contrasena',
        database: 'nombreBasedatos',
        port: 3306 // si el puerto esta en corriendo 
     });
     connection.connect(function(error){
        if(error){
           throw error;
        }else{
           console.log('Conexion correcta.');
        }
     });
    return connection; 
}

exports.connect = connect;