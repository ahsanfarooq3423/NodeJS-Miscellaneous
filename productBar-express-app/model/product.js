const mongodb = require('mongodb');
const getdb = require('../util/database').getDb;


module.exports = class Product {
    constructor(body) {
        this.name = body.name;
        this.price = body.price;
        this.url = body.url;
        this.details = body.details;
    }

   saveProduct() {
       const db = getdb();
       db.collection('productbar').insert(this)
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log(err))
   }

}
