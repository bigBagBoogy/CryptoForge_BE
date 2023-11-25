const express = require("express");
const fs = require("fs").promises; // Use fs.promises for asynchronous file reading

const app = express();
const port = 3000;

app.get("/lesson/:lessonId", async (req, res) => {
  try {
    const lessonId = req.params.lessonId;

    // Read JSON file
    const jsonFilePath = `files/${lessonId}.json`;
    const lessonData = JSON.parse(await fs.readFile(jsonFilePath, "utf8"));

    // Read Solidity file
    const solidityFilePath = `solidity_files/${lessonId}.sol`;
    const solidityCode = await fs.readFile(solidityFilePath, "utf8");

    // Combine data
    lessonData.solidityCode = solidityCode;

    res.json(lessonData);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
