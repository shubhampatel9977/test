const express = require("express");
const { spawn } = require("child_process");
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./src/routes/index.js");

const app = express();
const port = 8080;

app.use(cors());
app.use(bodyParser.json());

app.use("/", routes);

const startNextApp = () => {
  // const path = `${__dirname}/Next`;

  spawn("npx", ["next", "start"], {
    cwd: "/home/lenovo/Documents/ssd/test/Next",
    stdio: "inherit",
  });
  console.log("Next.js server build successfully.");
};

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  startNextApp();
});
