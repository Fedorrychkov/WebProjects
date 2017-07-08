import React, { Component } from 'react';

import './header.component.css';

import Menu from '../menu/menu.component';

class Header extends Component {
    propsValue = {
        menuLink: [
            "Главная",
            "О нас",
            "Контакты",
        ]
    };

    render() {
        return (
            <header className="header">
                <div className="page-wrapper header__wrap">
                    <div className="header__logo">SVR</div>
                    <Menu />
                </div>
            </header>
        );
    }
}

export default Header;