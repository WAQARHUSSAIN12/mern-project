const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CartSchema = new Schema({
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
    user:[{ type: Schema.Types.ObjectId, ref: 'User' }],
    cartItem:[{ type: Schema.Types.ObjectId, ref: 'CartItem' }],
})
const Cart = mongoose.model('Cart', CartSchema);
module.exports = Cart;