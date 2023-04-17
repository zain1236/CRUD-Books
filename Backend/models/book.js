const { required } = require('joi');
const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    author: {
        type: String,
        required: true
    },
    no_of_pages: {
        type: Number ,
        required: true
    },
    published_at: {
        type: Date,
        required : true
    },
    created_at: {
        type: Date,
        default: Date.now,
        required : true
    },
    updated_at: {
        type: Date,
        default: Date.now,
        required : true
    }
})

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;