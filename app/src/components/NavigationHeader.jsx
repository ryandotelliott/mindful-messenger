import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styles from '../styles/NavigationHeader.module.css';
import back_arrow from '../assets/images/back_arrow.svg'
import menu_icon from '../assets/images/menu_icon.svg'


export default class NavigationHeader extends Component {
    render() {
        return (
            <div>
                <div className={styles.container}>
                    <div className={styles['left-elements']}>
                        <Link to="/">
                            <img src={back_arrow} alt="" width="15px" height="15px" />
                        </Link>
                        <h1 className={styles.header + ' ml-20'}>{this.props.text}</h1>
                    </div>
                        <Link to="#">
                            <img src={menu_icon} alt="" width="15px" height="15px" />
                        </Link>
                </div>
            </div>
        )
    }
}
