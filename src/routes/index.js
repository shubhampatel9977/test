const express = require("express");
const groceryRoutes = require("./groceryRoutes");

const app = express();
const router = express.Router();

// default route
app.get("/", (req, res) => {
  res.json("Api working fine!");
});

// grocery routes
router.use("/grocery", groceryRoutes);

module.exports = router;
