import React, { Component } from 'react';
import styles from '../styles/NewEventNotification.module.css';

export default class NewEventNotification extends Component {
    render() {
        return (
            <div className={styles.container + " text-gray-darker"}>
                <h1 className="font-medium font-size-medium">Create Event</h1>
                <div className={styles['event-container']}>
                    <p><span className="font-medium">Name: </span>{this.props.eventName}</p>
                    <p><span className="font-medium">Date: </span>{this.props.eventDate}</p>
                    <p><span className="font-medium">Time: </span>{this.props.eventTime}</p>
                </div>
                <div className={styles['button-container']}>
                    <button className={styles['button-large']}>Add Event</button>
                    <button className={styles['button-small']}>No Thanks</button>
                </div>
            </div>
        )
    }
}