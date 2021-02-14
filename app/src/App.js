import './App.css';
import MessagesView from './views/MessageView';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import ChatsView from './views/ChatsView';
import ComposeChatView from './views/ComposeChatView';

let chats = [
    {
        name: "Harris Rothaermel",
        imageUrl: "https://i.imgur.com/3LdWieK.png",
        message: "This is an example message to show how the app looks with chats.",
        id: 1
    },
    {
        name: "Aditya Singhal",
        imageUrl: "https://i.imgur.com/3LdWieK.png",
        message: "This is an example message to show how the app looks with chats.",
        id: 2
    },
    {
        name: "Ryan Elliott",
        imageUrl: "https://i.imgur.com/3LdWieK.png",
        message: "This is an example message to show how the app looks with chats.",
        id: 3
    },
    {
        name: "Harris Rothaermel",
        imageUrl: "https://i.imgur.com/3LdWieK.png",
        message: "This is an example message to show how the app looks with chats.",
        id: 4
    },
    {
        name: "Aditya Singhal",
        imageUrl: "https://i.imgur.com/3LdWieK.png",
        message: "This is an example message to show how the app looks with chats.",
        id: 5
    },
    {
        name: "Ryan Elliott",
        imageUrl: "https://i.imgur.com/3LdWieK.png",
        message: "This is an example message to show how the app looks with chats.",
        id: 6
    },
    {
        name: "Harris Rothaermel",
        imageUrl: "https://i.imgur.com/3LdWieK.png",
        message: "This is an example message to show how the app looks with chats.",
        id: 7
    },
    {
        name: "Aditya Singhal",
        imageUrl: "https://i.imgur.com/3LdWieK.png",
        message: "This is an example message to show how the app looks with chats.",
        id: 8
    },
    {
        name: "Ryan Elliott",
        imageUrl: "https://i.imgur.com/3LdWieK.png",
        message: "This is an example message to show how the app looks with chats.",
        id: 9
    },
    {
        name: "Harris Rothaermel",
        imageUrl: "https://i.imgur.com/3LdWieK.png",
        message: "This is an example message to show how the app looks with chats.",
        id: 10
    },
    {
        name: "Aditya Singhal",
        imageUrl: "https://i.imgur.com/3LdWieK.png",
        message: "This is an example message to show how the app looks with chats.",
        id: 11
    },
    {
        name: "Ryan Elliott",
        imageUrl: "https://i.imgur.com/3LdWieK.png",
        message: "This is an example message to show how the app looks with chats.",
        id: 12
    },
]

let messages = [
    {
        content: "This is a sample message.",
        sender: true,
        id: 1
    },
    {
        content: "This is a sample message.",
        sender: false,
        id: 2
    },
    {
        content: "This is a sample message.",
        sender: true,
        id: 3
    },
    {
        content: "This is a sample message.",
        sender: true,
        id: 4
    },
    {
        content: "This is a sample message.",
        sender: false,
        id: 5
    },
    {
        content: "This is a sample message.",
        sender: true,
        id: 6
    },
]

function App() {
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

export default App;
