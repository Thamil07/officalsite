class ProductController{
    async get_products(req, res){
        return res.status(200).send([
            {name: "Titan", price: 8000, qty: 800},
            {name: "Titan pr1", price: 9000, qty: 700}
        ])
    }
}

module.exports = ProductController