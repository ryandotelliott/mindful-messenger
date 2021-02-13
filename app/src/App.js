import './App.css';
import ChatsContainer from './components/ChatsContainer';

function App() {
    let chats = [
        {
            name: "Harris Rothaermel",
            imageUrl: "https://i.imgur.com/3LdWieK.png",
            message: "This is an example message to show how the app looks with chats."
        },
        {   
            name: "Aditya Singhal",
            imageUrl: "https://i.imgur.com/3LdWieK.png",
            message: "This is an example message to show how the app looks with chats."
        },
        {   
            name: "Ryan Elliott",
            imageUrl: "https://i.imgur.com/3LdWieK.png",
            message: "This is an example message to show how the app looks with chats."
        },
    ]
  return (
    <div className="App">
        <ChatsContainer chats={chats} />
    </div>
  );
}

export default App;
