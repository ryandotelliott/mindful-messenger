import React, { Component } from 'react';
import styles from '../styles/SendButton.module.css';
import send_icon from '../assets/images/send_icon.svg'

export default class SendButton extends Component {
    render() {
        return (
            <div className={styles.container}>
                <img src={send_icon} alt="" width="16px" height="16px" />
            </div>
        )
    }
}
