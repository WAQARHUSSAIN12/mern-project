const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let OrderSchema = new Schema({
    customerName: {
        type: String,
        required: true,
    },
    customerEmail: {
        type: String,
        required: true
    },
    customerContact: {
        type: String,
        required: true,
    },
    customerPostCode: {
        type: String,
        required: true
    },
    devliveryAddress: {
        type: String,
        required: true
    },
    customerInstruction: {
        type: String,
        required: true
    },
    customerToken: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
    },
    orderDate: {
        type: Date,
        default: Date.now
    },
    user:[{ type: Schema.Types.ObjectId, ref: 'User' }],
    orderItem:[{ type: Schema.Types.ObjectId, ref: 'OrderItem' }],
})
const Order = mongoose.model('Order', OrderSchema);
module.exports = Order;