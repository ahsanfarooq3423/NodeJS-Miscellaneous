const fs = require('fs');
const path = require('path');

const p = path.join(path.dirname(process.mainModule.filename), "data", "cart.json")

const Product = require('./product');

module.exports = class Cart {
    static postToCart(productId, cb) {
        Product.getProductById(productId, product => {
            fs.readFile(p, (err, fileContent) => {
                let price = product.price;
                price = price.split('$')[1] *1;
                let cart = {products:[], totalPrice : 0}
                if (!err) {
                    cart = JSON.parse(fileContent);
                    const cartProduct = cart.products.find( p => p.id === productId );
                    if (cartProduct) {
                        cartProduct.qty += 1;
                        cart.totalPrice += price;
                    } else {
                        cart.products.push({id :productId, qty : 1})
                        cart.totalPrice += price;
                    }
                    
                    fs.writeFile(p, JSON.stringify(cart), err => {console.log(err)
                        return cb()
                    })
                } else {
                    cart.products.push({id : productId, qty : 1})
                    cart.totalPrice += price;
                    fs.writeFile(p, JSON.stringify(cart), err => {
                        console.log(err);
                        cb()
                    })
                }
                
            } )
        })
    }

    static getCartProduct(cb) {
        fs.readFile(p, (err, fileContent) => {
            if (!err) {
                const cartProducts = JSON.parse(fileContent).products;
                for (products of cartProducts) {
                    console.log(products);
                }
            } else {
                return cb([]);
            }
        })
    }
}