const initDB = require('./../extra/db')
//rutas de laboratorista
    module.exports = async (router, nombre) => {

        router.get('/laboratorista', (req,res) => {

            const connect = initDB.connect();
        
            if(nombre != '' || tokenSession != ''){
                const op = req.query.opcion || 1;

                console.log('ingreso a laboratorista');

                res.render('laboratorista', { title: nombre, opcion: op});
            }
        }); 

    }

