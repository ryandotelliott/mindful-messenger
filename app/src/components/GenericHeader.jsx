import React, { Component } from 'react';
import styles from '../styles/GenericHeader.module.css';
const requestImageFile = require.context('../assets/images', true, /.svg$/);

export default class GenericHeader extends Component {
    render() {
        return (
            <div className={styles.container}>
                <h1 className={styles.header}>{this.props.text}</h1>
                <a href="#">
                    <img src={requestImageFile(`./${this.props.image}.svg`).default} alt="" width="13px" height="13px" />
                </a>
            </div>
        )
    }
}
