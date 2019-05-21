const express = require('express');

const server = express();

server.get('/', (req, res) => {
    res.send('Hello Express!');
})

server.get('/home', (req, res) => {
    res.send('This is the home page!');
})

server.listen(4242, () => {
    console.log('Express Server is running');
})