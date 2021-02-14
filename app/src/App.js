import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import io from 'socket.io-client';
import axios from 'axios';
import './App.css';
import MessagesView from './views/MessageView';
import ChatsView from './views/ChatsView';
import ComposeChatView from './views/ComposeChatView';

class App extends Component {
    state = {
        username: 'testUser',
        socket: io('http://localhost:8000'),
        chats: [],
        messages: []
    }

    constructor(props) {
        super(props);

        this.state.socket.on('private_message', (data) => {

            // We add message first so we can get an accurate chat preview
            this.addMessage(data);

            console.log(data);
            this.updateChat(data, data.sender);

            // Send to GPT3
            // axios.post('http://localhost:4242/reminder/', {
            //     sender: data.sender,
            //     epoch: data.epoch,
            //     text: data.message
            // }).then((response) => {
            //     console.log(response.data);

            //     // TODO: handle GPT3 response

            // }).catch((err) => {
            //     console.log(err);
            // });

        });

        // todo: remove after debug
        window.app = this;
    }

    componentDidMount() {
        let usernamePrompt = prompt("Please enter your username");
        this.setState(prevState => ({
            ...this.state,
            username: usernamePrompt
        }), () => this.identify());
    }

    identify() {
        this.state.socket.emit('identify', { username: this.state.username });
    }

    addChat(chat) {
        let joined = this.state.chats.concat(chat);
        this.setState({ chats: joined });
    }

    updateChat(data, targetUser) {
        // Find most recent message to use as preview for chat box
        let previewMessage;

        for (let i = this.state.messages.length - 1; i >= 0; i--) {
            if (this.state.messages[i].sender == data.sender) {
                previewMessage = this.state.messages[i].message;
                break;
            }
        }

        // Create chat object to compare to exist to see if we need to add or just update
        let chat = {
            name: targetUser,
            imageUrl: 'https://ui-avatars.com/api/?name=' + targetUser,
            preview: previewMessage,
            id: targetUser
        }

        // Custom index of function that only compares names
        function indexOfChat(o, arr) {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].name == o.name) {
                    return i;
                }
            }
            return -1;
        }

        let chatIndex = indexOfChat(chat, this.state.chats)
        if (chatIndex == -1) {
            this.addChat(chat);
        } else {
            this.updateChatContents(chatIndex, chat)
        }
    }

    updateChatContents(index, chat) {
        let chatsCopy = [...this.state.chats]
        chatsCopy[index] = chat;
        this.setState({ chats: chatsCopy })
    }

    addMessage(message) {
        if (!message.sender) message.sender = this.state.username;
        let joined = this.state.messages.concat(message);
        this.setState({ messages: joined });
    }

    sendMessage(message) {
        console.log('App base:');
        console.log(message);
        this.state.socket.emit('private_message', message);
        this.addMessage(message);
        this.updateChat(message, message.target)
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <Switch>
                        <Route path="/compose"
                            render={(props) => (<ComposeChatView {...props} />)} />
                        <Route
                            path="/messages/:target"
                            render={(props) => (<MessagesView {...props} messages={this.state.messages} viewer={this.state.username} onSend={this.sendMessage.bind(this)} />)} />
                        <Route path="/" render={(props) => (<ChatsView {...props} chats={this.state.chats} />)} />
                    </Switch>

                </div>
            </Router>
        );
    }
}

export default App;