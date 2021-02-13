import React, { Component } from 'react'
import styles from '../styles/MessageInput.module.css'

export default class MessageInput extends Component {
    render() {
        return (
            <div className={styles.container}>
                <textarea className={styles['message-input']} placeholder="Type something..."/>
            </div>
        )
    }
}