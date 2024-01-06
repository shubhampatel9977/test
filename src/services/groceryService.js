const fs = require("fs");

// Add Product in file
exports.createProduct = (data) => {
  try {
    const existingData = fs.readFileSync("config/data.json", "utf8");
    if (existingData) {
      // Write the updated data back to the file
      const parsedData = JSON.parse(existingData);
      parsedData.push(data);
      fs.writeFileSync("config/data.json", JSON.stringify(parsedData));
      return true;
    } else {
      // First time data insert in file
      const modifyData = [data];
      fs.writeFileSync("config/data.json", JSON.stringify(modifyData));
      return true;
    }
  } catch (error) {
    console.error("Someting wrong", error);
  }
};

// Get all product
exports.getAllProduct = () => {
  try {
    // Read data from the file
    const data = fs.readFileSync("config/data.json", "utf8");
    if (data) {
      const parsedData = JSON.parse(data);
      return parsedData;
    }
    return [];
  } catch (error) {
    console.error("Someting wrong", error);
  }
};
