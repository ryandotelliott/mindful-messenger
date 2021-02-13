import React, { Component } from 'react';
import GenericHeader from '../components/GenericHeader';
import ChatsContainer from '../components/ChatsContainer';

export default class ChatsView extends Component {
    render() {
        return (
            <div>
                <GenericHeader text="Chats" image="add_chat"/>
                <ChatsContainer chats={this.props.chats}/>
            </div>
        )
    }
}
