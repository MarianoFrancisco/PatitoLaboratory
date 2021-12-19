const express = require('express');
const path = require('path'); 

// server
const app = express();

// settings
app.set('port',3000);

//routers
app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, '/views/index.html'));

});

//middlewares

// statics files


//listening the server
app.listen(app.get('port'), ()=> {
    console.log("Server in port", app.get('port'));
    
} );