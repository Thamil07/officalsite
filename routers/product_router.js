const express = require('express')
const ProductController = require("../controllers/ProductController"

)
const router = express.Router()
const product_controller = new ProductController()

router.get("/getall", product_controller.get_products)

module.exports = router

