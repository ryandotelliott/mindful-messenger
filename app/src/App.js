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

let chats = [
]

let messages = [
]

class App extends Component {
    state = {}

    constructor(props) {
        super(props);

        socket.emit('identify', { username: 'testUser' });
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
                            <MessagesView messages={messages} />
                        </Route>
                        <Route path="/">
                            <ChatsView chats={chats} />
                        </Route>
                    </Switch>

                </div>
            </Router>
        );
    }
}

export default App;