import React, { Component } from 'react';
import './Header.css';
import Nav from '../nav/Nav';

export default class Header extends Component {
    state = {
        menu: false
    }

    displayNav = () => {
        this.setState({ menu: !this.state.menu });
    }

    hideNav = a => {
        this.setState({ menu: a });
    }

    render() {
        const { menu } = this.state;

        let menuIcon = 'menu';

        if (menu) {
            menuIcon = 'cross';
        }

        return (
            <header className="header">
                <div className="header__title">Medical Service</div>
                <Nav menu={menu} hideNav={this.hideNav} />
                <img src={require(`./img/${menuIcon}.svg`)} alt="menu" className="nav__btn" onClick={this.displayNav} />
            </header>
        )
    }
}
