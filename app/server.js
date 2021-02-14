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

    client.on('typing', (data) => {
        // todo
    })

    client.on('private_message', (data) => {
        if (userExists(data.target)) {
            userSessions[data.target].forEach((item, index) => {
                item.emit('private_message', { sender: client.username, message: data.message, epoch: data.epoch })
            });
            // todo: save to mongo here
        }
    });

    client.on('identify', (data) => {
        console.log(data.username + ' identified');
        if (userExists(data.username)) {
            if (userSessions[data.username].indexOf(client) == -1) {
                userSessions[data.username].push(client);
            }
        } else {
            userSessions[data.username] = [client];
        }
        client.username = data.username;
    });

    client.on('disconnect', () => {
        if (!client.username && userExists(client.username)) {
            let oldClient = userSessions[client.username].indexOf(client);
            if (oldClient > -1) {
                userSessions[client.username].splice(oldClient, 1);
            }
            console.log(client.username + ' disconnected');
        }

    });
});

function userExists(username) {
    return Object.keys(userSessions).includes(username);
}

const port = 8000;
io.listen(port);
console.log('listening on port ', port);