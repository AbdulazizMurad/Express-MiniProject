const Book = require("../models/Book");
const getBooks = async (req, res, next) => {
  try {
    const Books = await Book.find();
    res.json(Books);
  } catch (error) {
    next(error);
  }
};
const getBookById = async (req, res, next) => {
  const { bookId } = req.params;
  try {
    const foundBook = await Book.findById(bookId);
    if (foundBook) {
      return res.status(200).json({ data: foundBook });
    } else {
      res.status(404).json({ message: "book not found" });
    }
  } catch (error) {
    next(error);
  }
};
const createBook = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = req.file.path;
    }
    const newBook = await Book.create(req.body);
    res.status(201).json(newBook);
  } catch (error) {
    next(error);
  }
};
const deleteBook = async (req, res, next) => {
  const { bookId } = req.params;
  try {
    const foundBook = await Book.findById(bookId);
    if (foundBook) {
      await foundBook.deleteOne();
      res.status(204).end();
    } else {
      res.status(404).json({ message: "book not found" });
    }
  } catch (error) {
    next(error);
  }
};
const updateBook = async (req, res, next) => {
  const { bookId } = req.params;
  try {
    const foundBook = await Book.findById(bookId);
    if (foundBook) {
      await foundBook.updateOne(req.body);
      res.status(204).end();
    } else {
      res.status(404).json({ message: "book not found" });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { createBook, getBooks, getBookById, deleteBook, updateBook };
