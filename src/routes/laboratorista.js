const initDB = require('./../extra/db')
//rutas de laboratorista
    module.exports = (router, nombre) => {

        router.get('/laboratorista', (req,res) => {

            const connect = initDB.connect();

            connect.query('SELECT * FROM usuario', function (error, results, fields) {
                if (error)
                    throw error;
            
                results.forEach(result => {
                    console.log(typeof result.nombre); 
                    console.log(result);
                });
            });
            connect.end();
        
            if(nombre != '' || tokenSession != ''){
                const op = req.query.opcion || 1;

                console.log('ingreso a laboratorista');

                res.render('laboratorista', { title: nombre, opcion: op});
            }
        }); 

    }

