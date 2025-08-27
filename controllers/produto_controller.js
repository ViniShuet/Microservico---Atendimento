const productRepository = require("../src/repositories/product-repository");
const ProductRepository = require("../src/repositories/product-repository");

class ProdutoController {
  async getAllProducts(req, res) {
    try {
        const product = await ProductRepository.findAll()
        res.status(200).json({
            sucess:true,
            data:products,
            message:"Produtos listados"
        })
    } catch (error) {
      res.status(500).json({
        sucess: false,
        message: "Erro ao buscar os produtos",
      });
    }
  }

  async getProductById(req,res){
    try {
        const {id} = req.params;
        //const {name} = req.params;
        const product = await ProductRepository.getProductById(id)

        if(!product){
            return res.status(404).json({
                sucess:false,
                message:"Produto nao encontrado"
            })
        }

        res.status(200).json({
            sucess:true,
            data: product,
            message: "Produto encontrado"
        })


    } catch (error) {
        res.status(500).json({
        sucess: false,
        message: "Erro ao buscar o produto",
      });
    }
  }

  async createProduct(req, res){
    try {
        const productData = req.body
        const newProduct = await productRepository.create(productData)

        res.status(201).json({
            sucess:true,
            data:newProduct,
            message: "Produto criado com sucesso"
        })
        
    } catch (error) {
        res.status(500).json({
        sucess: false,
        message: "Erro ao criar o produto",
      });
    }
  }

  async updateProduct(req, res){
    try {
        const {id} = req.params
        const productData = req.body
        const productUpdate = await ProductRepository.update(id, productData)

        if(!productUpdate){
            return res.status(404).json({
                sucess:false,
                message:"Produto nao encontrado"
            })
        }

        res.status(200).json({
            sucess:true,
            message:"Atualizado com sucesso"
        })

    } catch (error) {
        res.status(500).json({
        sucess: false,
        message: "Erro ao atualizar o produto",
      });
    }
  }

  async deleteProduct(res, req){
    try {
        const {id} = req.params
        const deleteProduct = await ProductRepository.delete(id)

        if(!deleteProduct){
            return res.status(404).json({
                sucess:false,
                messagem:"Produto nao encontrado"
            })
        }

        res.status(200).json({
            sucess:true,
            message:"Delete com sucesso"
        })


    } catch (error) {
        res.status(500).json({
        sucess: false,
        message: "Erro ao deletar o produto",
      });
    }
  }
 
}

module.exports = new ProdutoController()
