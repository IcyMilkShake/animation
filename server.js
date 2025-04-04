// server.js
const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve files from the root directory (or any other directory)
app.use(express.static(path.join(__dirname)));  // <-- Adjusted to serve root

// Basic route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));  // Serve your main HTML file
});

// Start server
app.listen(port, () => {
  console.log(`Server running at port: `,port);
});
