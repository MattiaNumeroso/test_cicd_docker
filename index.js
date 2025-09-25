const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/client', (req, res) => {
    res.send('Hello client!');
});

const server = app.listen(port, () => {
    console.log(`server are listening at http://localhost:${port} port: ${port}`);
});

const close = () => {
    server.close();
}

module.exports = { app, close };

