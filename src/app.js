const express = require('express') //instancia do nosso server
const app = express()

//Config mongoDB
const mongoose = require('mongoose')

//Config a conexao
mongoose.connect("mongodb://vinishuet:nja270105vj@localhost:27017/?authSource=admin")
.then(() => {
    console.log('Conectado')
})
.catch((error) => {
    console.log(`Erro ao tentar conectar com o mongo ${error}`)
}) 

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
const { mongo, Mongoose } = require('mongoose')
app.use("/", index)

module.exports = app; //exportar o 'app' que configuramos la em cima (json, permissoes, rotas e etc)