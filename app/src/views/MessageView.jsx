import React, { Component } from 'react';
import NavigationHeader from '../components/NavigationHeader';
import MessagesContainer from '../components/MessagesContainer';
import InputContainer from '../components/InputContainer';
import styles from '../styles/MessageView.module.css';


export default class MessageView extends Component {

    state = {
        message: ""
    }

    constructor(props) {
        super(props);

        this.handleSend = this.handleSend.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        console.log('ping');
        this.setState({
            message: event.target.value
        })
    }

    handleSend() {
        console.log('pong');
        this.props.onSend({
            target: this.props.target,
            message: this.state.message,
            epoch: Date.now()
        })
    }


    render() {
        return (
            <div className={styles.container}>
                <NavigationHeader text="Example Chat" />
                <MessagesContainer messages={this.props.messages} />
                <InputContainer onSend={this.handleSend} onChange={this.handleChange} />
            </div>
        )
    }
}
