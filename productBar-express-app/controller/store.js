const Product = require("../model/product");
const Cart = require("../model/cart");

//DONE
exports.getProducts = (req, res, next) => {
    Product.find()
        .then(products => {
            res.render("shop/products", {
                path: '/products',
                products: products
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
                path : '/products'
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
                products: products
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
    Cart.postToCart(req.params.id, () => {
        res.redirect('/products')
    })
}


