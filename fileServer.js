const http = require('http');
const url = require('url');
const fs = require('fs');
const uc = require('upper-case');

const server = http.createServer((req, res) => {
    let q = url.parse(req.url, true);
    let filename = "." + q.pathname;
    fs.readFile(filename, (err, data) => {
        if (err) {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            return res.end("404 Not Found");
            // res.writeHead(404, {'Content-Type': 'text/html'});
            // return res.end("404 Not Found");
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.write(uc.upperCase("hello world"));
        return res.end();
    });
})
server.listen(8080);