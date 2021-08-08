const cluster = require('cluster');
const express = require('express');
const http = require('http');
const os = require('os');

const app = express();

const PORT = process.env.PORT || 3000;

const cpus = os.cpus().length;

app.get('/', (_req, res) => {
    for (let i = 0; i < 1e8; i++) {
        // some long running task
    }

    res.send('OK');
});

if (cluster.isMaster) {
    for (let i = 0; i < cpus; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker) => {
        console.log(`Worker ${worker.process.pid} died`);
        // restart
        cluster.fork();
    });
} else {
    const server = http.Server(app);
    server.listen(
        PORT, 
        () => {
            console.log(`Server ${process.pid} listening @ ${PORT}`);
        },
    );
}
