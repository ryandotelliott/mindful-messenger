import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import io from 'socket.io-client';
import './App.css';
import MessagesView from './views/MessageView';
import ChatsView from './views/ChatsView';
import ComposeChatView from './views/ComposeChatView';

const socket = io('http://localhost:8000');

class App extends Component {
    state = {
        chats: [],
        messages: []
    }

    constructor(props) {
        super(props);

        socket.emit('identify', { username: 'testUser' });
        socket.on('private_message', (data) => this.addMessage(data));
    }

    addMessage(message) {
        console.log(message);
        this.setState({ ...this.state.messages + message });
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <Switch>
                        <Route path="/compose">
                            <ComposeChatView />
                        </Route>
                        <Route path="/messages">
                            <MessagesView messages={this.state.messages} />
                        </Route>
                        <Route path="/">
                            <ChatsView chats={this.state.chats} />
                        </Route>
                    </Switch>

                </div>
            </Router>
        );
    }
}

export default App;