const express = require('express');
const Product = require('../models/product_model'); // Assuming you have a Product model

class ProductController {
    // Retrieve products
    async get_products(req, res) {
        try {
            const products = await Product.find();
            console.log("product");
            return res.status(200).json(products);     
        } catch (err) {
            return res.status(500).json(err);
        }
        
    }

    async get_product_count(req,res){
        try{
            const product =await Product.countDocuments();
            return res.status(200).json({count:product});

        }catch(err){
            return res.status(500).send("failed to count product");
        }
    }

    // Add a product
    async add_product(req, res) {
        try {
            const { name, description, image, price, qty } = req.body;

            if (!name || !description || !image || !price || !qty) {
                return res.status(400).json({ error: 'All fields are required' });
            }

            const new_product = await Product.create({ name, description, image, price, qty });
            return res.status(201).json(new_product);
        } catch (err) {
            return res.status(500).json(err);
        }
    }
}

module.exports = ProductController;
