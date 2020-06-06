const http = require('http');
const files = require('./readfile');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {
       'Content-Type': 'text/html' 
    });

    res.write(files.getFile('header'));
    res.end();
});


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});