const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    cart : {
       items :  [ { productId: { type : Schema.Types.ObjectId, ref : 'Product', required : true},
               quantity : {type : Number, required : true } }]
        }
})

userSchema.methods.addToCart = function(product) {
    const updatedCart = {...this.cart};
    const items = [...updatedCart.items];
    if (items.length === 0){
        const newCartProduct = {
            productId : product._id,
            quantity : 1
        }
        items.push(newCartProduct)
        console.log(items)
    } else {

        const indexItem = items.findIndex(item => item.productId.toString() === product._id.toString());
        if (indexItem !== -1){
            items[indexItem].quantity += 1;
        } else {
            const newCartProduct = {
                productId : product._id,
                quantity : 1
            }
            items.push(newCartProduct);
        }
    }
    console.log(items);
    updatedCart.items = items;
    this.cart = updatedCart;
    return this.save();
}



module.exports = mongoose.model('User', userSchema);