const res = require('express/lib/response');
const conexion = require('../../.././extra/db');
exports.saveUsuario= (req,res)=>{
    const usuario=req.body.usuario;
    const correo = req.body.correo;
    const passwordUsuario = req.body.passwordUsuario;
    const tipoUsuario = req.body.tipoUsuario;
    const idTurno = req.body.idTurno;
    conexion.query('INSERT INTO usuario SET ?',{usuario:usuario,correo:correo,passwordUsuario:passwordUsuario,tipoUsuario:tipoUsuario,idTurno:idTurno},(error,results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/administrador/usuarios');
        }
    })
}
exports.subirUsuario=(req,res)=>{
    const usuario= req.body.usuario;
    const correo = req.body.correo;
    const passwordUsuario = req.body.passwordUsuario;
    const tipoUsuario = req.body.tipoUsuario;
    const idTurno = req.body.idTurno;
    conexion.query('UPDATE usuario SET ? WHERE usuario= ?',[{correo:correo,passwordUsuario:passwordUsuario,tipoUsuario:tipoUsuario,idTurno:idTurno},usuario],(error,results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/administrador/usuarios');
        }
    })
}