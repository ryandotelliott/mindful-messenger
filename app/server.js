const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
    cors: {
        origin: '*',
    }
});

let userSessions = {};

io.on('connection', (client) => {
    console.log('new connection');

    // client.on('typing', (data) => {

    // })

    client.on('private_message', (data) => {
        if (userExists(data.target)) {
            userSessions[data.target].forEach((item, index) => {
                item.emit('private_message', { sender: client.username, message: data.message })
            });
            // todo: save to mongo here
        }
    });

    client.on('identify', (data) => {
        console.log(data.username + ' identified');
        if (userExists(data.username)) {
            client.username = data.username;
            userSessions[data.username].push(client);
        } else {
            userSessions[data.username] = [client];
        }
    });

    client.on('disconnect', () => {
        // todo: remove old socket from userSession?
        console.log('disconnected');
    });
});

function userExists(username) {
    return Object.keys(userSessions).includes(username);
}

const port = 8000;
io.listen(port);
console.log('listening on port ', port);