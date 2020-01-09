const router = require("express").Router();
const beerRoutes = require("./beers");
const userRoutes = require("./user");
const reviewRoutes = require("./reviews");

// /api/beer routes
router.use("/beers", beerRoutes);

// /api/user routes
router.use("/user", userRoutes);

// /api/review routes
router.use("/reviews", reviewRoutes);

module.exports = router;
