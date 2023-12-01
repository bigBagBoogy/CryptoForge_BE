// server.js
const express = require("express");
const fs = require("fs").promises;
const cors = require("cors"); // Import the cors middleware
const path = require("path");

const app = express();
const port = 3000;

// Use cors middleware
app.use(cors());
////////////
// CODE  ///
////////////
app.get("/lessonCode/:lessonId", async (req, res) => {
  try {
    const lessonId = req.params.lessonId;
    // console.log("lessonId", lessonId);
    // Read Solidity file
    const solidityFilePath = path.join("solidity_files", `${lessonId}.sol`);
    // console.log("solidityFilePath", solidityFilePath);
    const solidityCode = await fs.readFile(solidityFilePath, "utf8");
    // console.log("solidityCode", solidityCode);

    res.json({ solidityCode });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
////////////
// TEXT  ///
////////////
app.get("/lessonText/:lessonId", async (req, res) => {
  try {
    console.log("got a request for lessonText");
    const lessonId = req.params.lessonId;
    console.log("lessonId", lessonId);
    // Read Markdown file
    const markdownFilePath = path.join("markdown_files", `${lessonId}.md`);
    console.log("markdownFilePath", markdownFilePath);
    const markdownCode = await fs.readFile(markdownFilePath, "utf8");
    console.log("markdownCode", markdownCode);

    res.json({ markdownCode });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
