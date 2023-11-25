// server.js
const express = require("express");
const fs = require("fs").promises;
const cors = require("cors"); // Import the cors middleware

const app = express();
const port = 3000;

// Use cors middleware
app.use(cors());

app.get("/lesson/:lessonId", async (req, res) => {
  try {
    const lessonId = req.params.lessonId;
    console.log("lessonId", lessonId);
    // Read Solidity file
    const solidityFilePath = `solidity_files/${lessonId}.sol`;
    console.log("solidityFilePath", solidityFilePath);
    const solidityCode = await fs.readFile(solidityFilePath, "utf8");
    console.log("solidityCode", solidityCode);

    res.json({ solidityCode });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
