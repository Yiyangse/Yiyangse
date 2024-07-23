const http = require('http');
const server = http.createServer((req, res) => {
  const path = url.parse(req.url, true).pathname;

  if (path == '/user') {
  } else if (path == '/feed') {
  } else if (path == '/community') {
  }
  res.setHeader('Content-Type', 'text/html');
  res.end('OK');
});

Server.listen('3000', () => console.log('OK 서버시작!'));
