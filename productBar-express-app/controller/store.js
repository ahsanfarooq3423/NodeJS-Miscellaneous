const Product = require("../model/product");

exports.getProducts = (req, res, next) => {
    Product.fetchProducts(products => {
        res.render("products",{
        path : '/',
        products : products
        });
    })
} 

exports.adminData  = (req, res, next) => {
    Product.fetchProducts(products => {
        res.render("admin", {
            path : '/admin',
            products : products
        });
    })
}


exports.saveProduct = (req,res,next) => {
    const product = new Product(req.body);
    product.saveProduct();
    res.redirect("/")
}
