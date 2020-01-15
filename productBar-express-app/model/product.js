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

const store = {
    products : [
        { name : "A Book", price : "$34" ,  url : "https://images.unsplash.com/photo-1490633874781-1c63cc424610?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" },
        { name : "A Toy", price : "$23" ,  url : "https://images.unsplash.com/photo-1531214159280-079b95d26139?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" }
    ]
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
            url : this.url
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

}
