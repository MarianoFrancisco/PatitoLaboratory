const res = require('express/lib/response');
const conexion = require('../../.././extra/db');
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
exports.subirUsuario=(req,res)=>{
    const idUsuario= req.body.idUsuario;
    const nombreUsuario=req.body.nombreUsuario;
    const passwordUsuario = req.body.passwordUsuario;
    const tipoUsuario = req.body.tipoUsuario;
    const idTurno = req.body.idTurno;
    conexion.query('UPDATE usuario SET ? WHERE idUsuario= ?',[{nombreUsuario:nombreUsuario,passwordUsuario:passwordUsuario,tipoUsuario:tipoUsuario,idTurno:idTurno},idUsuario],(error,results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/administrador/usuarios');
        }
    })
}