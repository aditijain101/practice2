/*const express=require("express");
const router = express.Router();
const Book =require("../model/Book");
const bookscontroller=require("../controllers/books-controller");
router.get("/", bookscontroller.getAllBooks);
router.post("/", bookscontroller.addBook);
router.get("/:id",bookscontroller.getById );
router.put("/:id",bookscontroller.updateBook);
router.delete("/:id",bookscontroller.deleteBook);
module.exports = router;*/
const express = require("express");
const router = express.Router();
const Book = require("../model/chatSchema");
const chatController = require("../controllers/chat-controller");

router.post("/", chatController.getBotReply);
// router.post("/", booksController.addBook);
// router.get("/:id", booksController.getById);
// router.put("/:id", booksController.updateBook);
// router.delete("/:id", booksController.deleteBook);

module.exports = router;