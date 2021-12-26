const mysqlhost = process.env.MYSQLHOST || '192.168.0.183';
const mysqluser = process.env.MYSQLUSER || "oliverPatito";
const mysqlpass = process.env.MYSQLPASS || "Oliver12345";
const mysqldatabase = process.env.MYSQLDATABASE || "patitoDB"
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