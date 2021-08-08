const express = require('express');
const http = require('http');

const app = express();

const PORT = process.env.PORT || 3000; 

app.get('/', (_req, res) => {
    for (let i = 0; i < 1e8; i++) {
        // some long running task
    }

    res.send('OK');
});

const server = http.Server(app);
server.listen(
    PORT, 
    () => {
        console.log(`Server listening @ ${PORT}`);
    },
);