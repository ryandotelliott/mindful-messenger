import React, { Component } from 'react';
import styles from '../styles/Message.module.css';

export default class Message extends Component {
    render() {
        const message_styles = this.props.sender ? styles['message-container-sender'] : styles['message-container-receiver'];

        return (
            <div className={message_styles}>
                <p>{this.props.content}</p>
            </div>
        )
    }
}
