const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let UserSchema = new Schema({
    name: {
        type: String,
        required: true
        },
    email:{
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    },
    devliveryAddress: {
        type: String,
        required: true
    },
    userType: { 
        type: String,
        required: true
    },
    password: {
        type: String
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
})
const User = mongoose.model('User', UserSchema);
module.exports = User;