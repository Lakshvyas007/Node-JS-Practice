const fs = require('fs');
const http = require('http');

const hostname = '127.0.0.1'
const port = 3000


const server = http.createServer((req, res) =>{
    fs.readFile('txt.html',(err, data)=>{
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/html');
        res.write(data)
        return res.end();
    })
})

server.listen(8080);

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`)
//   })


// http.createServer(function (req, res) {
//     fs.readFile('txt.html', function(err, data) {
//       res.writeHead(200, {'Content-Type': 'text/html'});
//       res.write(data);
//       return res.end();
//     });
//   }).listen(8080);