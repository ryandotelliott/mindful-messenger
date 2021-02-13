import './App.css';
import InputContainer from './components/InputContainer';

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

    let messages = [
        {
            content: "Hello there, this is an example message sent using Avocado Ai!",
            sender: true
        },
        {
            content: "Using Avocado Ai you are able to get smart calender events from your messages.",
            sender: false
        },
        {
            content: "We're also able to give smart suggestions and sentiment analysis!",
            sender: true
        }
    ]
  return (
    <div className="App">
        <InputContainer />
    </div>
  );
}

export default App;
