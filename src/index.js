const express = require('express');
const bodyParser = require('body-parser'); 


const{ PORT }= require('./config/serverConfig') 
const setupAndStartServer  = async() => {

    const app =  express();

    app.use(bodyParser.json()); 
    app.use(bodyParser.urlencoded({extended : true})); 
    app.get('/' , (req , res)=>{
        console.log(req.body);
    })

    app.listen(PORT, ()=>{
        console.log(`Server Started at ${PORT}`);   
    })
}

console.log(process.env.PORT);
console.log(process.env.NAME);
setupAndStartServer();
