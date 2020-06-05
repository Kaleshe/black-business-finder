const http = require('http');
const files = require('./readfile');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.write('Kaleshe, is that you?\n');
    console.log(files.getFile('header'));
    res.end('Omg it is');
});


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});