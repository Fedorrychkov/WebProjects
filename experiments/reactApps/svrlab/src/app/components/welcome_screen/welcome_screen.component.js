import React, { Component } from 'react';

import './welcome_screen.component.css';

import amplifire from '../../assets/img/rightside_buty.jpg';

class welcomeScreen extends Component {

    render() {
        var background = {
            backgroundImage:  "url(" + amplifire + ")"
        };
        return (
            <div className="welcome">
                <div style={background} className="welcome__bg">
                    <div className="welcome__text page-wrapper">
                        <h1 className="welcome__title">Дорогая hi-end аппаратура ручной работы</h1>
                        <p className="welcome__subtext">Ламповые усилители высшего качества. Лучшее решение для Вас.</p>
                        <div className="welcome__buttons">
                            <button className="button">Подробнее</button>
                            <button className="button button__easy">Лечебная музыка</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default welcomeScreen;