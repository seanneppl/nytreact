const router = require("express").Router();
const searchController = require("../../controllers/searchController");

router.route("/:query")
  .get(searchController.findAll)

module.exports = router;