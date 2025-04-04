const http = require('http');
const fs = require('fs');
const path = require('path');
const mime = require('mime');  // Helps set the correct MIME type for files

const server = http.createServer((req, res) => {
  // Serve index.html
  if (req.url === '/') {
    fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error loading index.html');
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  }

  // Serve image files (from the same directory as index.html)
  else if (req.url.startsWith('/')) {
    const filePath = path.join(__dirname, req.url);  // Absolute path to the requested file
    const extname = path.extname(filePath).toLowerCase();
    const mimeType = mime.getType(extname) || 'application/octet-stream';

    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('File not found');
        return;
      }

      res.writeHead(200, { 'Content-Type': mimeType });
      res.end(data);
    });
  }

  // Handle any other requests (404 errors)
  else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

const PORT = 8080;
server.listen(PORT, () => {
  console.log("Server is running on PORT:", PORT);
});
