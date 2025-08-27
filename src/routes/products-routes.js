const express = require('express')
const router = express.Router()
const ProdutoController = require("../../controllers/produto_controller")

router.get('/', ProdutoController.getAllProducts)
router.get('/:id', ProdutoController.getProductById)
router.post('/', ProdutoController.createProduct)
router.put('/:id', ProdutoController.updateProduct)
router.delete('/:id', ProdutoController.deleteProduct)

module.exports = router
