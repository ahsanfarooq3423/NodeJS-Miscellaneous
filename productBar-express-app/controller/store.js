const Product = require("../model/product");
const Cart = require("../model/cart");

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
            console.log(product)
            res.render('shop/product-details', {
                product : product,
                path : '/products'
            })
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
    res.redirect("/products")
}

exports.deleteProduct = (req, res, next) => {
    Product.deleteProduct(req.body.productId, () => {   
        res.redirect("/admin");
    })    
}

exports.addProductToCart = (req, res, next) => {
    Cart.postToCart(req.params.id, ()=> {
        res.redirect('/products')
    })
}


