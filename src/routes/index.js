const express = require('express');
const router = express.Router();
const lab  = require('./laboratorista');
const {encrypt, compare } = require('./../extra/encriptar');
const {tokenSign, verifyToken, decodeSing} = require('./../extra/generateToken');
const conexion = require('.././extra/db');
// Iniciar sesion en los diferentes usuarios

//Secretaria
router.get('/secretariaIndex', (req, res) => {
  res.render('./secretaria/secretariaIndex', { title: 'Inicio' });
});

router.get('/ingresarPaciente', (req, res) => {
  
  
  const connection = require('.././extra/db');
  const sql = 'SELECT * FROM paciente';

  let sqlPaciente = ''
  connection.query(sql,function (error,results) {
    if(error) throw error;
    else{
      res.render('./secretaria/ingresarPaciente',{results:results});
    }
  });
  //res.render('./secretaria/ingresarPaciente', { title: 'Registro' });
  
});

router.get('/resultadosSecretaria', (req, res) => {
  res.render('./secretaria/resultadosSecretaria', { title: 'Resultados' });
});

router.get('/horariosSecretaria', (req, res) => {
  
  res.render('./secretaria/horariosSecretaria', { title: 'Horarios' });

});



let nombre, tokenSession = ''; 
const sqlUsuario = 'SELECT * FROM usuario';
const sqlExamen = 'SELECT * FROM examen';
const sqlSubExamen = 'SELECT * FROM subExamen';
// Iniciar sesion en los diferentes usuarios
router.get('/', (req, res) => {
  res.render('index', { title: 'Iniciar Sesion' });

});

//validar credenciales de los usuarios al momento de logiarse
router.post('/Proceder', async (req, res) => {
	nombre = req.body.nombre|| '';	  
  const password = req.body.password|| '';

  conexion.query('SELECT * FROM usuario WHERE usuario = ?',[nombre],async (error, results, fields) =>{
    if (error)
      throw error;
    
    if(results[0] != undefined){
      let tipo = results[0].tipoUsuario;
      let passwordd = results[0].passwordUsuario;
      console.log(results[0]);
      if (await compare(password,passwordd)) {
        if(tipo == 1){ await res.redirect('/administrador');
      
        }else if(tipo==2){ await res.render('./secretaria/secretariaIndex');
      
        }else if(tipo==3){
          //tokenSession = await tokenSign(result);
          //console.log(tokenSession);
          res.redirect('/laboratorista');
          //res.send({data: user, tokenSession});
      
        }else{ res.status(404).redirect('/'); }
      }else{ res.status(404).redirect('/'); }
    }else{ res.status(404).redirect('/'); }
  });
});
//rutas de laboratorista
lab(router , nombre);



//router administrador
router.get('/administrador', (req, res) => {
  res.render('./administrador/administrador', { title: 'Iniciar Sesion Administrador' });
  console.log("Precondiciones");
  console.log("Necesita logearse como administrador");
});
router.get('/administrador/examenes', async(req, res) => {
  
  await conexion.query(sqlExamen, (error,results) =>{
    if(error) throw error;
    else{ res.render('./administrador/examenes',{results:results});
    }
  });
  console.log("Precondiciones");
  console.log("Deben existir examenes");

});

router.get('/administrador/subExamenes', (req, res) => {
  conexion.query(sqlSubExamen,(error,results) => {
    if(error) throw error;
    else{
      res.render('./administrador/subExamenes',{results:results});
    }
  });
  console.log("Precondiciones");
  console.log("Deben existir subExamenes");
});
router.get('/administrador/reportes', (req, res) => {
  res.render('./administrador/reportes', { title: 'Reportes Admin' });
  console.log("Precondiciones");
  console.log("Deben haber sido procesados los reportes");
});
router.get('/administrador/usuarios', (req, res) => {
  conexion.query(sqlUsuario, (error,results) => {
    if(error) throw error;
    else{
     res.render('./administrador/usuarios',{results:results});
    }
  });
  console.log("Precondiciones");
  console.log("Deben haber usuarios");
});
router.get('/administrador/corteMes', (req, res) => {
  res.render('./administrador/corteMes', { title: 'Corte del Mes' });
  console.log("Precondiciones");
  console.log("Haber procesado examenes");
  console.log("Ser fin de mes");
});
router.get('/administrador/roles', (req, res) => {
  res.render('./administrador/roles', { title: 'Roles' });
  console.log("Precondiciones");
  console.log("Sin precondiciones");
});

//CRUD USUARIO
const crud = require('../views/administrador/crud/crud');
router.post('/saveUsuario',crud.saveUsuario);
router.get('/editarUsuario/:usuario',(req,res)=>{
  const usuario=req.params.usuario;
  conexion.query('SELECT * FROM usuario WHERE usuario=?',[usuario],(error,results)=>{
    if(error){
      console.log(error);
  }else{
      res.render('./administrador/crud/editarUsuario',{usuario:results[0]});
  }
  })
})
router.post('/subirUsuario',crud.subirUsuario);
//crud examen
router.p

// CRUD SECRETARIA
//Agregar paciente
const crudPaciente = require('../views/secretaria/cruds/crudPacienteExamen');
router.post('/secretaria/ingresarPaciente',crudPaciente.savePaciente);

//Editar paciente
router.get('/editPaciente/:cui', (req, res) => {
  const cui = req.params.cui;
  conexion.query('SELECT * FROM paciente WHERE cui=?',[cui],(error,results)=>{
    if(error){
      throw error;
    }else{
      res.render('./secretaria/cruds/editarPaciente',{user:results[0]});
    }
  });
  
});
router.post('/UploadPaciente',crudPaciente.editPaciente);

//Agregar Examen
router.get('/PacienteExamen/:cui', (req, res) => {
const cui = req.params.cui;
  
  conexion.query('SELECT * FROM paciente WHERE cui=?',[cui],(error,results)=>{
    if(error){
      throw error;
    }else{
      res.render('./secretaria/cruds/realizarExamen',{user:results[0]});
    }
  });
  
});
router.post('/ExamenPaciente',crudPaciente.realizarExamen);

router.post('/subirUsuario',crud.subirUsuario);
//crud examen
router.post('/saveExamen',crud.saveExamen);
router.get('/editarExamen/:codigoExamen',(req,res)=>{
  const examen=req.params.codigoExamen;
  conexion.query('SELECT * FROM examen WHERE codigoExamen=?',[examen],(error,results)=>{
    if(error){
      console.log(error);
  }else{
      res.render('./administrador/crud/editarExamen',{examen:results[0]});
  }
  })
})
router.post('/subirExamen',crud.subirExamen);
//crud sub-examen
router.post('/saveSubExamen',crud.saveSubExamen);
module.exports = router;