const Product = require("../model/product");
const User = require('../model/user');

//DONE
exports.getProducts = (req, res, next) => {
    Product.find()
        .then(products => {
            res.render("shop/products", {
                path: '/products',
                products: products,
                isAuthenticated : req.session.isLoggedIn
            });
        })
        .catch(err => console.log(err))
}

//DONE
exports.getProductDetails = (req, res, next) => {
    Product.findById(req.params.id)
        .then(product => {
            res.render('shop/product-details', {
                product : product,
                path : '/products',
                isAuthenticated : req.session.isLoggedIn
            })
        })
        .catch(err => console.log(err)) 
}
//DONE
exports.adminData = (req, res, next) => {
    Product.find()
        .then(products => {
            res.render("admin/admin", {
                path: '/admin',
                products: products,
                isAuthenticated : req.session.isLoggedIn
            });
        })
        .catch(err => console.log(err))

}

//DONE
exports.saveProduct = (req, res, next) => {
    const name = req.body.name;
    const price = req.body.price;
    const details = req.body.details;
    const url = req.body.url;

    const product = new Product({
        name: name,
        price: price,
        details: details,
        url: url
    });
    product.save()
        .then(response => {
            res.redirect("/products");
        })
        .catch(err => console.log(err))
}

//DONE
exports.deleteProduct = (req, res, next) => {
    Product.deleteOne({ _id : req.body.productId })
        .then(response => {
            console.log(response)
            res.redirect('/admin')
        })
        .catch(err => console.log(err))
}


exports.addProductToCart = (req, res, next) => {
    Product.findById(req.params.id)
        .then(product => {
            return req.user.addToCart(product);
        })
        .then(result => {
            res.redirect('/cart');
        })
        .catch(err => console.log(err))
}

exports.getCart = (req, res, next) => {
    User.findById(req.user.id)
        .populate('cart.items.productId')
        .then(result => {
            res.render('shop/cart', {
                cart : result.cart.items,
                path : '/cart',
                isAuthenticated : req.session.isLoggedIn
            })
        })
}



