const { model, Schema } = require("mongoose");

const BooksSchema = new Schema({
  title: String,
  author: String,
  price: {
    type: String,
    default: "5KD".toUpperCase,
  },
  image: String,
});

module.exports = model("Book", BooksSchema);
