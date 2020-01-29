const Product = require("../model/product");
const Cart = require("../model/cart");

exports.getProducts = (req, res, next) => {
    Product.fetchProducts(products => {
        res.render("shop/products", {
            path: '/products',
            products: products
        });
    })
}

exports.getProductDetails = (req, res, next) => {
    Product.getProductById(req.params.id, product => {
        console.log(product)
        res.render('shop/product-details', {
            product: product,
            path: '/products'
        })
    });

}

exports.adminData = (req, res, next) => {
    res.render("admin/admin", {
        path: '/admin'
    })
    // Product.fetchProducts(products => {
    //     res.render("admin/admin", {
    //         path : '/admin',
    //         products : products
    //     });
    // })
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
        .then(response=> {
            res.redirect("/products");
        })
        .catch(err => console.log(err))
}

exports.deleteProduct = (req, res, next) => {
    Product.deleteProduct(req.body.productId, () => {
        res.redirect("/admin");
    })
}

exports.addProductToCart = (req, res, next) => {
    Cart.postToCart(req.params.id, () => {
        res.redirect('/products')
    })
}


