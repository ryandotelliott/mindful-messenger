import React, { Component } from 'react'
import styles from '../styles/ChatsContainer.module.css';
import Chat from './Chat';

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
            <Chat name={chat.name} message={chat.message} imageUrl={chat.imageUrl} />
        ));
    }
}
