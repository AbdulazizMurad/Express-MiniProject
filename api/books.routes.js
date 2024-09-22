const express = require("express");
const router = express.Router();
const upload = require("../middlewares/multer");
const {
  getBooks,
  createBook,
  deleteBook,
  updateBook,
  getBookById,
} = require("./books.controller");

router.get("/", getBooks);
router.get("/:bookId", getBookById);

router.post("/", upload.single("image"), createBook);

router.delete("/:bookId", deleteBook);

router.put("/:bookId", upload.single("image"), updateBook);

module.exports = router;
