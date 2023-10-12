const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write("Hi there");
    res.end(JSON.stringify({
        data: 'Hello World!',
    }));
})


server.listen(5000);


////Handling pattern

const server1 = http.createServer((req, res) => {

    if (req.url === '/') {
        res.end(`<H1>Welcome to the Home Page</H1>`);
    }
    else if (req.url === '/about') {
        res.end(`<H1>Welcome to the About Page</H1>`);
    }
    else {
        res.end(`
        <H1>Oops Erros</H1>
        <a href="/">back home</a>        
        `);
    }

})


server1.listen(5500);