import React, { Component } from 'react'
import Chat from './Chat';
import styles from '../styles/ChatsContainer.module.css';
import { Link } from 'react-router-dom';

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
            <Link to={"/messages/" + chat.name} style={styles["link"]}>
                <Chat name={chat.name} preview={chat.preview} imageUrl={chat.imageUrl} key={chat.id} />
            </Link>
        ));
    }
}
