const mysqlhost = process.env.MYSQLHOST || 'localhost';
const mysqluser = process.env.MYSQLUSER || "DOU";
const mysqlpass = process.env.MYSQLPASS || "DELLbasedatos2021.";
const mysqldatabase = process.env.MYSQLDATABASE || "patitoBD";
const mysql = require('mysql');

function connect() {

    const connection = mysql.createConnection({
        host: mysqlhost,
        user: mysqluser,
        password: mysqlpass,
        database: mysqldatabase,
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