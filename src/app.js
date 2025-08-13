const express = require('express') //instancia do nosso server
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

//Habilitar o CORS
app.use(function (req, res, next){
     //Permito qualquer origem (por conta do *)
    res.header('Access-Control-Allow-Origin', '*');

    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token'); 

    //Metodos que vamos expor na aplicacao
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); 

    next();
});

//Criar rotas
const index = require('./routes/index')
app.use("/", index)

module.exports = app; //exportar o 'app' que configuramos la em cima (json, permissoes, rotas e etc)