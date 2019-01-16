const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  synopsis: String,
  completed: {type:Boolean, default: false},
  date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
