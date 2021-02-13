import React, { Component } from 'react';
import styles from '../styles/Chat.module.css';
import profile from '../assets/images/profile.png'

export default class Chat extends Component {
    render() {
        const chat_container_styles = `${styles['chat-container']} p-10`;
        const image_styles = `${styles['profile-image']} w-50 h-50 br-100 mr-20`;
        const text_container_styles = `${styles['text-container']}`;
        const chat_name_styles = `${styles['chat-name']} text-gray-darker font-medium`;
        const preview_styles = `${styles['message-preview']} text-gray-regular`;

        return (
            <div className={chat_container_styles}>
                <img src={profile} alt="" className={image_styles}/>
                <div className={text_container_styles}>
                    <p className={chat_name_styles}>{this.props.name}</p>
                    <p className={preview_styles}>{this.props.message}</p>
                </div>
            </div>
        )
    }
}
