var express = require("express")
var router = express.Router();
var controller = require("../controllers")



router.post("/",controller.Book.create)


module.exports = router;