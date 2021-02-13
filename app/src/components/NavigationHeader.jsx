import React, { Component } from 'react';
import styles from '../styles/NavigationHeader.module.css';
import back_arrow from '../assets/images/back_arrow.svg'
import menu_icon from '../assets/images/menu_icon.svg'


export default class NavigationHeader extends Component {
    render() {
        return (
            <div>
                <div className={styles.container}>
                    <div className={styles['left-elements']}>
                        <a href="#">
                            <img src={back_arrow} alt="" width="15px" height="15px" />
                        </a>
                        <h1 className={styles.header + ' ml-20'}>{this.props.text}</h1>
                    </div>
                        <a href="#">
                            <img src={menu_icon} alt="" width="15px" height="15px" />
                        </a>
                </div>
            </div>
        )
    }
}
