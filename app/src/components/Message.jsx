import React, { Component } from 'react';
import styles from '../styles/Message.module.css';

export default class Message extends Component {
    render() {
        const message_styles = this.props.sender != this.props.viewer ? styles['message-container-receiver'] : styles['message-container-sender'];

        return (
            <div className={message_styles}>
                <p>{this.props.content}</p>
            </div>
        )
    }
}
