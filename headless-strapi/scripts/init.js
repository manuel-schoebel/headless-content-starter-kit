const fs = require("fs");

// check if .env file exists
if (!fs.existsSync(".env")) {
  console.log("Creating .env file...");
  fs.copyFileSync(".env.example", ".env");
} else {
  console.log(".env file already exists");
}

// run npm build script inside src/plugins/content
const { exec } = require("child_process");
const path = require("path");
const contentPath = path.join(__dirname, "..", "src", "plugins", "content");
console.log("Building content plugin...");
exec("npm run build", { cwd: contentPath }, (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(stdout);
  console.log(stderr);
});
