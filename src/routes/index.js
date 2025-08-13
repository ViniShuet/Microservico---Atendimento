const express = require('express')
const router = new express.Router()

//Point de acesso (endpoint)
//req = informacoes que recebemos do usuriao
//res = resposta que vamos dar para o usuario
//next = faz alguns tratamentos
router.get("/", (req, res, next) => {
    res.status(200).send({
        "description" : "meu primeiro servico node"
    })
});

module.exports = router;