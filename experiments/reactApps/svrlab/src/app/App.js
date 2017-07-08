import React, { Component } from 'react';

import './App.css';

import Header from './components/header/header.component';
import WelcomeScreen from './components/welcome_screen/welcome_screen.component';
import Amplifire from './components/amplifire/amplifire.component';

class App extends Component {
  render() {
    return (
      <div className="main_markup">
          <Header />
          <WelcomeScreen />
          <Amplifire />
      </div>
    );
  }
}

export default App;
