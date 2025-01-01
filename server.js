const http = require('http');

const server = http.createServer((req, res) => {
  // This is where the error occurs
  res.end('Hello, world!');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});