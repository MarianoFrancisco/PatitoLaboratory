const mysqlhost = process.env.MYSQLHOST || '192.168.0.183';
const mysqluser = process.env.MYSQLUSER || "DOU";
const mysqlpass = process.env.MYSQLPASS || ".";
const mysqldatabase = process.env.MYSQLDATABASE || "USAC"
const mysql = require('mysql');

function connect() {

    const connection = mysql.createConnection({
        host: mysqlhost,
        user: mysqluser,
        password: mysqlpass,
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