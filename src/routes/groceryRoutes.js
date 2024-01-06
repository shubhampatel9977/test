const express = require("express");
const router = express.Router();
const groceryController = require("../controllers/groceryController");

// Define routes
router.post("/add/v1", groceryController.createProduct);
router.get("/list/v1", groceryController.getAllProduct);

module.exports = router;
