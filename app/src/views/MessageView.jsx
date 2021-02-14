import React, { Component } from 'react';
import NavigationHeader from '../components/NavigationHeader';
import MessagesContainer from '../components/MessagesContainer';
import InputContainer from '../components/InputContainer';
import styles from '../styles/MessageView.module.css';


export default class MessageView extends Component {
    render() {
        return (
            <div className={styles.container}>
                <NavigationHeader text="Example Chat" />
                <MessagesContainer messages={this.props.messages} />
                <InputContainer />
            </div>
        )
    }
}
