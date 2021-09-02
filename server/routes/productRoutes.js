var express = require('express')
var productRoutes = express.Router();
const Product= require('../models/product');
// getallproducts
productRoutes.get('/', (req, res)=> {
  Product.find({}).then((products)=>{
    res.send(products);
  });
})
// getproductbyid
productRoutes.get('/:id', (req, res)=> {
  Product.findById(req.params.id).then(product=>
    {
      console.log(product);
      res.send(product);
    }

  )}
)

module.exports = productRoutes;