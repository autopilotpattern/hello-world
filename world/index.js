'use strict';

// Load modules

const Http = require('http');


const server = module.exports = Http.createServer((req, res) => {
  res.writeHead(200);
  res.end('Konstantin');
});

server.listen(3002, () => {
  console.log(`World server listening on port ${server.address().port}`);
});
