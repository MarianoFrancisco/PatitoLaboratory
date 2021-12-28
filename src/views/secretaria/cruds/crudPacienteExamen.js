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

    
    const cui = req.body.cui;
    const txtfecha = req.body.txtfecha;
    const codigoExamen = req.body.examen;
    const nombreSub = req.body.Subexamen;
    const tipo = req.body.tipoExamen;
    
    

      conexion.query('INSERT INTO examenRealizar SET ?', {fechaExamen:txtfecha,cui:cui,nombreSubExamen:nombreSub,tipo:tipo,codigoExamen:codigoExamen},(error,results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/ingresarPaciente');
        }
    })
}

//turnos
exports.saveTurno= (req,res)=>{
    const idTurno=req.body.idTurno;
    const area = req.body.area;
    const horarioIngreso = req.body.horarioIngreso;
    const dias = req.body.dias;
    conexion.query('INSERT INTO turno SET ?',{idTurno:idTurno,area:area,horarioIngreso:horarioIngreso,dias:dias},(error,results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/horariosSecretaria');
        }
    })
}
exports.subirTurno=(req,res)=>{
    const idTurno=req.body.idTurno;
    const area = req.body.area;
    const horarioIngreso = req.body.horarioIngreso;
    const dias = req.body.dias;
    conexion.query('UPDATE turno SET ? WHERE idTurno= ?',[{area:area,horarioIngreso:horarioIngreso,dias:dias},idTurno],(error,results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/horariosSecretaria');
        }
    })
}