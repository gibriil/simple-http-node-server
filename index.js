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
            break;
    }
});

app.listen(port);