const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    lgImg: {
        type: String
    },
    smImg: {
        type: String
    },
    author: {
        type: String,
        required: true
    },
    pageCount: {
        type: Number,
    },
    publisher: {
        type: String
    },
    publishedDate: {
        type: String
    },
    rating: {
        type: String
    },
    snippet: {
        type: String
    },
    synopsis: String,
    date: {
        type: Date,
        default: Date.now
    }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;