const https = require('http');

const server = https.createServer((req, res) => {
    if (req.url === '/') {
        res.write('this is home page you know');
        res.end();
    } else if (req.url === '/about') {
        res.write('this is about page ');
        res.end();
    } else if (req.url === '/blog') {
        res.write('this is blog page ');
        res.end();
    } else {
        res.write('not found your page');
        res.end();
    }
});

server.listen(3000);
console.log('lessen on 3000 port your sever');
