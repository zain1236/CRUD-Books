var express = require("express")
var router = express.Router();
var controller = require("../controllers")



router.post("/",controller.Book.create)
router.get("/:id",controller.Book.getOne)
router.get("/",controller.Book.getAll)
router.delete("/:id",controller.Book.delete)
router.put("/:id",controller.Book.update)


module.exports = router;