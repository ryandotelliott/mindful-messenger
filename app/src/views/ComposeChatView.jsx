import React, { Component } from 'react';
import NavigationHeader from '../components/NavigationHeader';
import ChatsContainer from '../components/ChatsContainer';
import styles from '../styles/ComposeChatView.module.css';

let chats = [

]

export default class ComposeChatView extends Component {
    render() {
        return (
            <div className={styles.container}>
                <NavigationHeader text="Example Compose" />
                <ChatsContainer chats={chats}/>
            </div>
        )
    }
}
