var express = require('express');
var router = express.Router();

var bookRouter = require("./book.routes")

router.use("/book",bookRouter);

module.exports = router;
