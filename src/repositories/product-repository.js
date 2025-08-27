const Product = require('../models/product')

class ProductRepository{
    //Buscando todos os produtos ativos
    //Async = conecta e espera a resposata
    async findAll(){
        return await Product.find({active:true});
    }

    async findById(id){
        return await ProductRepository.findById(id)
    }

    //Criar
    async create(productData){
        //Criando uma instancia para persistir no mongo
        const product = new Product(productData)
        return await product.save();
    }

    //atualizar
    async update(id, product){
        return await Product.findByIdAndUpdate(
            id,
            productData
        )
    }

    //Delete
    async delete(id){
        return await Product.findByIdAndUpdate(
            id,
            {active:false}
        )
    }
}

module.exports = new ProductRepository