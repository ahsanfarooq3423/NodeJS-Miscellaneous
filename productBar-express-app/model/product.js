const fs = require('fs');
const path = require('path');

const p = path.join(path.dirname(process.mainModule.filename), "data", "products.json")

const getProductsData = cb => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            cb([])
        } else {
            cb(JSON.parse(fileContent));
        }
    })
}



module.exports = class Product {
    constructor(body) {
        this.name = body.name;
        this.price = body.price;
        this.url = body.url;
        this.details = body.details;
    }

    saveProduct () {
        const newProduct = {
            name : this.name,
            price : this.price,
            url : this.url,
            details : this.details,
            id : Math.random()
        }
        getProductsData(products => {
            products.push(newProduct);
            fs.writeFile( p, JSON.stringify(products) , err => {
                if (err) {
                    console.log(err)
                }
            } )
        })

    }

    static fetchProducts (cb) {
        getProductsData(cb)
    }

    static getProductById(id, cb) {
        id = id*1;
        console.log('IN THE GETPRODUCT BY ID');
        getProductsData(products => {
            const product = products.find(p => p.id == id);
            console.log(product);
            cb(product)
        })
      }

    static deleteProduct(id, cb) {
        let updatedProducts;
        id = id*1;
        getProductsData(products => {
            updatedProducts = products.filter(p => p.id !== id)
            fs.writeFile(p, JSON.stringify(updatedProducts), err => {
                if (err) {
                    console.log(err)
                    return cb();
                }
                cb()
            })
            });
            //need to delete from the cart as well when add the functionality of cart

    }

}
