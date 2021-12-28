const conexion = require('../../.././extra/db');

exports.savePaciente=(req,res)=>{
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const nombreCompleto = nombre +" "+  apellido;
    const cui = req.body.cui;
    const sexo = req.body.sexo;
    const edad = req.body.edad;
    const telefono = req.body.telefono;
    const examen = req.body.examen;
    
    conexion.query('INSERT INTO paciente SET ?',{nombrePaciente:nombreCompleto,sexo:sexo,edadPaciente:edad,cui:cui,edadPaciente:edad,numeroPaciente:telefono},(error,results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/ingresarPaciente');
        }
    }); 
}

exports.editPaciente=(req,res)=>{

    const nombre = req.body.nombre;
    const cui = req.body.cui;
    const sexo = req.body.sexo;
    const edad = req.body.edad;
    const telefono = req.body.telefono;
    

        conexion.query('UPDATE paciente SET ? WHERE cui  = ?', [{nombrePaciente:nombre,sexo:sexo,edadPaciente:edad,numeroPaciente:telefono}, cui],(error,results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/ingresarPaciente');
        }
    })
}

exports.realizarExamen=(req,res)=>{

    const idExamen = req.body.idExamen;
    const cuireal = req.body.cui;
    const cui = req.body.cui1;
    const sexo = req.body.sexo;
    const edad = req.body.edad;
    const telefono = req.body.telefono;
    

        conexion.query('INSERT INTO examenRealizar SET ?', [{nombrePaciente:nombre,sexo:sexo,edadPaciente:edad,numeroPaciente:telefono,cui:cui}, cuireal],(error,results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/ingresarPaciente');
        }
    })
}
