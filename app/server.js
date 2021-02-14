const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
    cors: {
        origin: '*',
    }
});

io.on('connection', (client) => {
    console.log('new connection');

    io.on('identify', (data) => {
        console.log(client + " is " + data);
    });

    io.on('disconnect', () => {
        console.log('disconnected');
    });
});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);