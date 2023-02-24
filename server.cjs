const http = require('http');
const url = require('url'); // tambahkan module url untuk mendapatkan alamat url endpoint

const handler = require('./handler.cjs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  const requestUrl = url.parse(req.url, true);

  //GET endpoint
  if (requestUrl.pathname === '/greeting' && req.method === 'GET') {
    handler.sayHello(req, res);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});