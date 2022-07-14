const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let OrderSchema = new Schema({
    status: {
        type: String,
        required: true,
        unique: true
    },
    devliveryAddress: {
        type: String,
        required: true
    },
    orderDate: {
        type: Date,
        default: Date.now
    },
    user:[{ type: Schema.Types.ObjectId, ref: 'User' }],
    orderItem:[{ type: Schema.Types.ObjectId, ref: 'OrderItem' }],
})
const Order = mongoose.model('Order', UserSchema);
module.exports = Order;