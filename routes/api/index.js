const router = require("express").Router();
const articlesRoutes = require("./articles");
const searchRoutes = require("./search");

router.use("/articles", articlesRoutes);
router.use("/search", searchRoutes);

module.exports = router;
