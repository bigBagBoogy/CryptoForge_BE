// buildLesson.js
const fs = require("fs");

const jsonFilePath = "files/1-3.json";

// Load JSON object file
const lessonData = JSON.parse(fs.readFileSync(jsonFilePath, "utf8"));

// Get Solidity file path from lessonData
const solidityFilePath = lessonData.solidityFilePath;

// Load Solidity code from file
const solidityCode = fs.readFileSync(lessonData.solidityFilePath, "utf8");

// Combine data
lessonData.solidityCode = lessonData;

// Now lessonData contains both the JSON object data and the Solidity code
console.log(lessonData);
