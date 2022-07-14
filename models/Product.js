const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: {
        type: String,
        required: [true, "name can't be null"]
    },
    desc: {
        type: String,
        required: [true, "desc can't be null"]
    },
    qty: {
        type: Number,
        required: [true, "qty can't be null"]
    },
    Price: {
        type:Number,
        required: [true, "Price can't be null"],
        min: [1,"Price must be at least 1"]
    },
    photoUrl: {
        type:String,
        default: ""
    },
    isActive: {
        type: Boolean,
        default: true
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    deletedDate: {
        type:Date
    },
    category: [{ type: Schema.Types.ObjectId, ref: 'Category' }],
})

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;