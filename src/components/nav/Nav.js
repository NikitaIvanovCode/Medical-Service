import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

export default class Nav extends Component {
    hideNav = () => {
        return this.props.hideNav(false);
    }

    render() {
        const { menu } = this.props;
        let showNav = '';

        if (menu) {
            showNav = 'show';
        }

        return (
            <nav>
                <ul className={`header__nav-list ${showNav}`}>
                    <li className="header__nav-item">
                        <NavLink to="/" exact onClick={this.hideNav}>Главная</NavLink>
                    </li>
                    <li className="header__nav-item" onClick={this.hideNav}>
                        <NavLink to="/specialists">Запись</NavLink>
                    </li>
                    <li className="header__nav-item" onClick={this.hideNav}>
                        <NavLink to="/visits">Визиты</NavLink>
                    </li>
                </ul>
            </nav>
        )
    }
}

