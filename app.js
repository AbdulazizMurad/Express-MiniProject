//imports needed:
const express = require("express");
const booksRoutes = require("./api/books.routes");
const connectDb = require("./database");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const notFoundHandler = require("./middlewares/notFoundHandler");
const errorHandler = require("./middlewares/errorHandler");
const path = require("path");
//app:
const app = express();
dotenv.config();
const PORT = process.env.PORT;

connectDb();
//midlewares:
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

//routes
app.use("/books", booksRoutes);
app.use("/media", express.static(path.join(__dirname, "media")));

//middle wares that handles error in the route (path):
app.use(notFoundHandler);
app.use(errorHandler);
//server:
app.listen(PORT, () => {
  console.log("The application is running on localhost:8000");
});
