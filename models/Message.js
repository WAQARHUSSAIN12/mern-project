const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    name: {
        type: String,
        required: [true, "name can't be null"]
    },
    subject: {
        type: String,
        required: [true, "subjects can't be null"]
    },
    email: {
        type: String,
        required: [true, "email can't be null"]
    },
    phone: {
        type:String,
        required: [true, "phone can't be null"],
        min: [1,"Price must be at least 1"]
    },
    message: {
        type:String,
        required: [true, "message can't be null"],
        min: [1,"Price must be at least 1"]
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
})

const Message = mongoose.model('Message', MessageSchema);
module.exports = Message;