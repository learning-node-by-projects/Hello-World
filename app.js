const http = require('http');

const server = http.createServer((req,res) => {
    const url = req.url;
    if(url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<h1>Hello World from NodeJS</h1>');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Page not found</h1><h2>You are not on "/"<h2>');
    return res.end();
});

server.listen(3000);
