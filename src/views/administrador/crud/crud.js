const res = require('express/lib/response');
const conexion = require('../../../extra/db');
const {encrypt, compare } = require('./../../../extra/encriptar');
//usuario
exports.estadoUsuario= async (req,res)=>{
        const usuario = await req.query.usuario || '';
        const estado = await req.query.estado || 0;
        const estado2 = estado == 1;
    conexion.query('UPDATE usuario SET ? WHERE usuario= ?',[{estado: !estado2},usuario],(error,results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/administrador/usuarios');
        }
    })
}
exports.saveUsuario= async (req,res)=>{
    const usuario=req.body.usuario;
    const correo = req.body.correo;
    const passwordUsuario = req.body.passwordUsuario;
    const tipoUsuario = req.body.tipoUsuario;
    const idTurno = req.body.idTurno;
    const estado = await req.body.estadoUsuario;
    const estado2 = estado =='on';
    const passEncriptado = await encrypt(passwordUsuario);

    conexion.query('INSERT INTO usuario SET ?',{usuario:usuario,correo:correo,passwordUsuario:passEncriptado,tipoUsuario:tipoUsuario,idTurno:idTurno,estado:estado2},(error,results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/administrador/usuarios');
        }
    })
}
exports.subirUsuario= async (req,res)=>{
    const usuario= req.body.usuario;
    const correo = req.body.correo;
    const passwordUsuario = req.body.passwordUsuario;
    const tipoUsuario = req.body.tipoUsuario;
    const idTurno = req.body.idTurno;
    const estado = await req.body.estadoUsuario;
    const estado2 = estado == 'on';

    conexion.query('UPDATE usuario SET ? WHERE usuario= ?',[{correo:correo,passwordUsuario:passwordUsuario,tipoUsuario:tipoUsuario,idTurno:idTurno,estado: estado2},usuario],(error,results)=>{
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