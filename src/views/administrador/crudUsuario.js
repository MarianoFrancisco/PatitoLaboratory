const conexion = require('../.././extra/db');
exports.saveUsuario= (req,res)=>{
    const nombreUsuario=req.body.nombreUsuario;
    const passwordUsuario = req.body.passwordUsuario;
    const tipoUsuario = req.body.tipoUsuario;
    const idTurno = req.body.idTurno;
    console.log(nombreUsuario+""+passwordUsuario);
}