const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 2,
    },
    type: {
        type: String,
        required: true,
        enum: ["student", "recruiter"],
    },
    email: {
        type: String,
        required: true,
        min: 6
    },
    password: {
        type: String,
        required: true,
        min: 6
    },
    company: {
        type: String,
        min: 2
    },
    date: {
        type: Date,
        default: Date.now()
    },
});

module.exports = mongoose.model('User', userSchema);