import React, { Component } from 'react';
import GenericHeader from '../components/GenericHeader';
import ChatsContainer from '../components/ChatsContainer';
import styles from '../styles/ChatsView.module.css';

export default class ChatsView extends Component {
    render() {
        return (
            <div className={styles.container}>
                <GenericHeader text="Chats" image="add_chat" route="/compose"/>
                <ChatsContainer chats={this.props.chats}/>
            </div>
        )
    }
}
