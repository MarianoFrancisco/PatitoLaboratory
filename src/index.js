const express = require('express');
const app = express();
const path = require('path');
//configuramos puerto
const port = process.env.port || 5000;
app.get('/' , (req , res)=>{
    res.sendFile(path.join(__dirname,'../PaginasWeb/index.html'));
});
    
