const groceryService = require("../services/groceryService");

exports.createProduct = (req, res) => {
  try {
    const newData = req.body;
    if (newData.productName && newData.quantity && newData.price) {
      // Call the userService to get all users
      const result = groceryService.createProduct(newData);
      if (result) {
        res.json({ api_status: 201, message: "Product saved successfully" });
      }
    } else {
      res.json({ api_status: 400, message: "Please check payload" });
    }
  } catch (error) {
    res.json({ api_status: 500, message: error });
  }
};

exports.getAllProduct = (req, res) => {
  try {
    // Call the groceryService to get all product
    const allProduct = groceryService.getAllProduct();
    res.json({ api_status: 200, data: allProduct });
  } catch (error) {
    res.json({ api_status: 500, message: error });
  }
};
