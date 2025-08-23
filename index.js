// index.js
const express = require("express");
const { askOracle, run } = require("./aiOracle");

const app = express();
const PORT = 3000;

// Start console version
console.log("🚀 JS (Javascript) Agent starting...");
run();

app.get("/ask", async (req, res) => {
  const question = req.query.question || "What is the future of blockchain?";
  const answer = await askOracle(question);

  res.json({
    question,
    answer,
    timestamp: new Date().toISOString(),
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🌐 Oracle API running at http://localhost:${PORT}/ask`);
});
