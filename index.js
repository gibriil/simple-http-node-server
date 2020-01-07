const http = require('http');

const port = 5000;

const app = http.createServer((req, res) => {
    switch (req.url) {
        case ('/'):
            res.setHeader('Content-Type', 'text/html');
            res.write(`
                <html>
                    <head>
                        <title>Simple HTTP Node Server</title>
                    </head>
                    <body>
                        <h1>Welcome to this Simple HTTP Node Server!</h1>
                    </body>
                </html>
                `);
            res.end();
            break;
        case ('/api'):
            res.setHeader('Content-Type', 'application/json');
            const obj = {
                key1: "value 1",
                key2: "value 2",
                key3: "value 3"
            }
            res.write(JSON.stringify(obj));
            res.end();
            break;
    }
});

app.listen(port);