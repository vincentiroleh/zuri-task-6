const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Email is required'],
    },
    country: {
        type: String,
        required: [true, 'County is required'],
    }
}, { timestamps: true });

const User = model('User', userSchema);
module.exports = User;