import React, { Component } from 'react';
import Message from './Message';
import styles from '../styles/MessagesContainer.module.css'

export default class MessagesContainer extends Component {
    render() {
        return (
            <div className={styles.container}>
                {this.renderMessages()}
            </div>
        )
    }

    renderMessages() {
        return this.props.messages.map((message) => (
            <Message viewer={this.props.viewer} content={message.message} sender={message.sender} key={message.id} />
        ));
    }
}
