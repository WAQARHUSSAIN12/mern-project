const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CategorySchema = new Schema({
 name: {
        type: String,
        required: [true, "name can't be null"]
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    deletedDate: {
        type:Date
    },
    product: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
});

const Category = mongoose.model('Category', CategorySchema);
module.exports = Category;