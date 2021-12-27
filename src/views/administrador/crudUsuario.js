const conexion = require('../.././extra/db');
exports.saveUsuario= (req,res)=>{
    const nombreUsuario=req.body.nombreUsuario;
    const passwordUsuario = req.body.passwordUsuario;
    const tipoUsuario = req.body.tipoUsuario;
    const idTurno = req.body.idTurno;
    conexion.query('INSERT INTO usuario SET ?',{nombreUsuario:nombreUsuario,passwordUsuario:passwordUsuario,tipoUsuario:tipoUsuario,idTurno:idTurno},(error,results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/administrador/usuarios');
        }
    })
}