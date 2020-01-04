const router = require("express").Router();
const beerRoutes = require("./beers");
const userRoutes = require("./user");

// /api/beer routes
router.use("/beers", beerRoutes);

// /api/user routes
router.use("/user", userRoutes);

module.exports = router;
