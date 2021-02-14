const w3cwebsocket = require('websocket').w3cwebsocket;

const client = new w3cwebsocket('ws://127.0.0.1:8000/');

client.onopen = () => {
    console.log('Websocket Client Connected');
    sendHelloWorld();
}

function sendHelloWorld() {
    client.send(JSON.stringify({
        type: "message",
        msg: "Hello World",
        username: "harris"
    }))
}

