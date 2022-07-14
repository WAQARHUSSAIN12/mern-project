const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CartItemSchema = new Schema({
    Description: {
        type: String,
        required: true
    },
    UnitPrice : {
        type: Number,
        required: true
    },
    TotalPrice : {
        type: Number,
        required: true
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    clientToken: {
        type: String,
        required: true
    },
    user:[{ type: Schema.Types.ObjectId, ref: 'User' }],
    product:[{ type: Schema.Types.ObjectId, ref: 'Product' }],
    cart:[{ type: Schema.Types.ObjectId, ref: 'Cart' }],
})

const CartItem = mongoose.model('CartItem', CartItemSchema);
module.exports = CartItem;