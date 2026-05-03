const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  let file = req.url === "/" ? "index.html" : req.url;

  fs.readFile(file, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end("File tidak ditemukan");
    } else {
      res.writeHead(200);
      res.end(data);
    }
  });
}).listen(process.env.PORT || 10003);