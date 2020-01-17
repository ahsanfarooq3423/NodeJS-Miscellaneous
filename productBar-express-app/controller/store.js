const Product = require("../model/product");

exports.getProducts = (req, res, next) => {
    Product.fetchProducts(products => {
        res.render("shop/products",{
        path : '/products',
        products : products
        });
    })
} 

exports.getProductDetails =(req, res, next) => {
    Product.getProductById(req.params.id, product => {
        res.send(req.params.id);
    });
    
}

exports.adminData  = (req, res, next) => {
    Product.fetchProducts(products => {
        res.render("admin/admin", {
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
