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
    }

    saveProduct () {
        const newProduct = {
            name : this.name,
            price : this.price,
            url : this.url,
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
        getProductsData(products => {
            const product = products.find(p => p.id === id);
            cb(product)
        })
      }

}
