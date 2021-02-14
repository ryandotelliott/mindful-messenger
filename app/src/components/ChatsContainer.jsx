import React, { Component } from 'react'
import Chat from './Chat';
import styles from '../styles/ChatsContainer.module.css';

export default class ChatsContainer extends Component {
    render() {
        return (
            <div className={styles.container}>
                {this.addChats()}
            </div>
        )
    }

    addChats() {
        return this.props.chats.map((chat) => (
            <Chat name={chat.name} preview={chat.preview} imageUrl={chat.imageUrl} key={chat.id} />
        ));
    }
}
