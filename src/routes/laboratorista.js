const initDB = require('./../extra/db')
const conexion = require('.././extra/db');
//rutas de laboratorista

    let opcion4 = (req,res,op,nombre) => {
        conexion.query('SELECT * FROM examenRealizar',(error,results)=>{
            if(error){
              throw error;
            }else{
                console.log(results);
                res.render('laboratorista', { title: nombre, results: results, opcion:op});
            }
          });
    }
    let opcion3 = (req,res,op,nombre) => {
        conexion.query('SELECT * FROM examenRealizar',(error,results)=>{
            if(error){
              throw error;
            }else{
                console.log(results);
                res.render('laboratorista', { title: nombre, results: results, opcion:op});
            }
          });
    }
    let opcion1 = (req,res,op,nombre) => {
        console.log(op,nombre);
        conexion.query('SELECT * FROM examenRealizar',(error,results)=>{
            if(error){
              throw error;
            }else{
                console.log(results);
                res.render('laboratorista', { title: nombre, results: results, opcion:op});
            }
        });
    }

    module.exports = (router, nombre) => {

        router.get('/laboratorista', async (req,res) => {
            

            if(nombre != ''){
                const op = await req.query.opcion || 1;
                console.log('agrege usuario  ',op);
                switch (op) {
                    case 1:
                        opcion1(req,res,op,nombre);
                        break;
                    case 3:
                        opcion3(req,res,op,nombre);
                        break;
                    case 4:
                        opcion4(req,res,op,nombre);
                        break;
                    
                    default:
                        res.render('laboratorista', { title: nombre});
                        break;
                }
                console.log('ingreso a laboratorista');
            }else{
                res.render('laboratorista', { title: nombre});
            }
        }); 
    }


