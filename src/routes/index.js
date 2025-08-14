const express = require('express')
const router = new express.Router()

let users = [
    {id: 1, nome: "Vinicius", idade: 20},
    {id: 2, nome: "Ele", idade: 999},
]

//Point de acesso (endpoint)
//req = informacoes que recebemos do usuriao
//res = resposta que vamos dar para o usuario
//next = faz alguns tratamentos
router.get("/", (req, res, next) => {

    try{
        res.status(200).send(
            {
                sucess: true,
                message: "Usuários encontrados",
                data: users,
                total: users.length
            }
        )
    }catch(error){
        //Se der erro, vamos retornar o status 500 (erro interno do servidor)
        res.status(500).json(
            {
                sucess: false,
                message: "Erro ao processar a requisição",
                error: error.message
            }
        )
    }
});

//Post
router.post('/', (req, res, next) => {
    try{
        const {nome, idade} = req.body

        //Verifica se tem nome e idade, se nao tem um dos 2, da erro (bad Request)
        if(!nome || !idade){
            return res.status(400).json({
                sucess:false,
                message: "Favor enviar os campos: nome e idade",
            })
        }

        const newId = users.length + 1;
        
        const newUser = {
            id : newId,
            nome,
            idade
        }

        users.push(newUser)

        //Status 201 = created
        res.status(201).json(
            {
                sucess : true,
                message : "Criado com sucesso",
                data : newId
            }
        )

    }catch(error){
        res.status(500).json(
            {
                sucess: false,
                message: "Erro ao criar o usuário",
                error: error.message
            }
        )
    }
})

//Atualiza pelo Id
router.put('/:id', (req, res, next) => {
    const id = parseInt(req.params.id)
    const {nome, idade} = req.body

        //Verifica se tem nome e idade, se nao tem um dos 2, da erro (bad Request)
        if(!nome || !idade){
            return res.status(400).json({
                sucess:false,
                message: "Favor enviar os campos: nome e idade",
            })
        }

        const userFind = users.findIndex(u => u.id == id);

        //quer dizer que nao encontrou
        if(userFind === -1){
            return res.status(404).json({
                sucess : false,
                message : "Usuário não encontrado"
            })
        }

        users[userFind] = {
            id,
            nome,
            idade
        }

        res.status(200).json({
            sucess : true,
            message : "Usuário atualizado com sucesso"
        })
})

module.exports = router;