const express = require('express');
const app = express();
const cors = require('cors');

const POET = 8080;
const HOST = '0.0.0.0';

app.use(cors({ methods: ['*'], credentials: false, origin: '*' }));

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);