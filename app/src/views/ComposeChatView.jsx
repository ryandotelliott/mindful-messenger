import React, { Component } from 'react';
import NavigationHeader from '../components/NavigationHeader';
import ChatsContainer from '../components/ChatsContainer';
import MessageInput from '../components/InputContainer';
import styles from '../styles/ComposeChatView.module.css';
import InputContainer from '../components/InputContainer';
import { Redirect } from 'react-router-dom';

let chats = [

]

export default class ComposeChatView extends Component {

    state = {
        target: "",
        redirect: null,
    };

    constructor(props) {
        super(props);
    }

    handleConnect() {
        this.props.onConnect(this.state.target);
        this.setState({ redirect: '/messages/' + this.state.target })
    }

    handleChange(event) {
        this.setState({
            target: event.target.value
        })
    }

    render() {

        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <div className={styles.container}>
                <NavigationHeader text="Example Compose" />
                {/* Replace this with other text area component with same handlers later on for different look
                    can't edit input container or else you mess up message page */}
                <InputContainer onSend={this.handleConnect.bind(this)} onChange={this.handleChange.bind(this)} value={this.state.target} />
            </div>
        )
    }
}
