const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let OrderItemSchema = new Schema({
    quantity: {
        type: Number,
        required: true,
    },
    unitPrice: {
        type: Number,
        required: true
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    product:[{ type: Schema.Types.ObjectId, ref: 'Product' }],
    order:[{ type: Schema.Types.ObjectId, ref: 'Order' }],
})

const OrderItem = mongoose.model('OrderItem', OrderItemSchema);
module.exports = OrderItem;