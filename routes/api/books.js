const router = require("express").Router();
const booksController = require("../../controllers/booksController");

//POST, GET, and DELETE Routes
router
  .route("/")
  .get(booksController.findAll)
  .post(booksController.create);

router.route("/:id")
  .delete(booksController.remove);

module.exports = router;