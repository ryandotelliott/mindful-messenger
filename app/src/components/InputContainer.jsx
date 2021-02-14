import React, { Component } from 'react'
import MessageInput from './MessageInput';
import SendButton from './SendButton';
import styles from '../styles/InputContainer.module.css'


export default class InputContainer extends Component {

    render() {
        return (
            <div className={styles.container}>
                <MessageInput onChange={this.props.onChange} value={this.props.value} />
                <SendButton onSend={this.props.onSend} />
            </div>
        )
    }
}
