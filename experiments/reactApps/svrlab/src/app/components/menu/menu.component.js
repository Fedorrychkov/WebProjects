import React, { Component } from 'react';

import './menu.component.css';

class Menu extends Component {

    render() {
        return (
            <div>
                <nav className="menu">
                    <ul className="menu__ul">
                        <li className="menu__item">
                            <a href="" className="menu__link">Главная</a>
                        </li>
                        <li className="menu__item">
                            <a href="" className="menu__link">Главная</a>
                        </li>
                        <li className="menu__item">
                            <a href="" className="menu__link">Главная</a>
                        </li>
                        <li className="menu__item">
                            <a href="" className="menu__link">Главная</a>
                        </li>

                    </ul>
                </nav>
            </div>
        );
    }
}

export default Menu;