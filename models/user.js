const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const date = new Date;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    userCreated: {
        type: Object,
        default: {
            month: date.getMonth() + 1,
            day: date.getDate(),
            year: date.getFullYear()
        }
    },

});

module.exports = User = mongoose.model('users', UserSchema);