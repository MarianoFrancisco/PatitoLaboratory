const res = require('express/lib/response');
const conexion = require('../../../extra/db');
//usuario
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
//examenes
exports.saveExamen= (req,res)=>{
    const codigoExamen=req.body.codigoExamen;
    const nombreExamen = req.body.nombreExamen;
    const precioExamen = req.body.precioExamen;
    const nombreMuestra = req.body.nombreMuestra;
    conexion.query('INSERT INTO examen SET ?',{codigoExamen:codigoExamen,nombreExamen:nombreExamen,precioExamen:precioExamen,nombreMuestra:nombreMuestra},(error,results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/administrador/examenes');
        }
    })
}
exports.subirExamen=(req,res)=>{
    const codigoExamen=req.body.codigoExamen;
    const nombreExamen = req.body.nombreExamen;
    const precioExamen = req.body.precioExamen;
    const nombreMuestra = req.body.nombreMuestra;
    conexion.query('UPDATE examen SET ? WHERE codigoExamen= ?',[{nombreExamen:nombreExamen,precioExamen:precioExamen,nombreMuestra:nombreMuestra},codigoExamen],(error,results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/administrador/examenes');
        }
    })
}
//sub-examenes
exports.saveSubExamen= (req,res)=>{
    const tipo=req.body.tipo;
    const nombreSub = req.body.nombreSub;
    const codigoExamen = req.body.codigoExamen;
    conexion.query('INSERT INTO subExamen SET ?',{tipo:tipo,nombreSub:nombreSub,codigoExamen:codigoExamen},(error,results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/administrador/subExamenes');
        }
    })
}