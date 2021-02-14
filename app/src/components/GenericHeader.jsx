import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styles from '../styles/GenericHeader.module.css';
const requestImageFile = require.context('../assets/images', true, /.svg$/);

export default class GenericHeader extends Component {
    render() {
        const img = this.props.image ? <img src={requestImageFile(`./${this.props.image}.svg`).default} alt="" width="13px" height="13px" /> : ""

        return (
            <div className={styles.container}>
                <h1 className={styles.header}>{this.props.text}</h1>
                <Link to={this.props.route}>
                {img}
                </Link>
            </div>
        )
    }
}
