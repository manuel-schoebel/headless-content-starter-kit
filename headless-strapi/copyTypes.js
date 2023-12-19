const fs = require("fs");
const path = require("path");

const sourcePath = path.join(__dirname, "./types/graphql.d.ts");
const destinationPath = path.join(
  __dirname,
  "../headless-nextjs/types/graphql.d.ts"
);
const destinationDir = path.dirname(destinationPath);

// Check if source file exists
if (!fs.existsSync(sourcePath)) {
  console.error(`Source file does not exist: ${sourcePath}`);
  process.exit(1);
}

// Ensure destination directory exists or create it
if (!fs.existsSync(destinationDir)) {
  fs.mkdirSync(destinationDir, { recursive: true });
}

// Read the source file, modify its content and write to the destination file
const content = fs.readFileSync(sourcePath, "utf8");

fs.writeFile(destinationPath, content, (err) => {
  if (err) {
    console.error(`Error writing to destination file: ${err}`);
    process.exit(1);
  } else {
    console.log("File copied and modified successfully!");
  }
});
