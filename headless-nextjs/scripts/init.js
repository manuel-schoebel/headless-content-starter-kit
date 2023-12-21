const fs = require("fs");

// check if .env file exists
if (!fs.existsSync(".env")) {
  console.log("Creating .env file...");
  fs.copyFileSync(".env.example", ".env");
} else {
  console.log(".env file already exists");
}
