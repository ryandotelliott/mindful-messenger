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
            target: this.props.match.params.target,
            message: this.state.message,
            epoch: Date.now()
        })
        this.setState({
            message: ""
        })
    }


    render() {
        return (
            <div className={styles.container}>
                <NavigationHeader text={this.props.match.params.target} />
                <MessagesContainer messages={this.props.messages} viewer={this.props.viewer} />
                <InputContainer onSend={this.handleSend} onChange={this.handleChange} value={this.state.message} />
            </div>
        )
    }
}
