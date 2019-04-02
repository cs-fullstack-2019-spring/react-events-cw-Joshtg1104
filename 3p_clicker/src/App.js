import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Player from './Player'
import NumberPoints from './NumberPoints'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <NumberPoints/>
            <Player playerNum = '1'/>
            <Player playerNum = '2'/>
            <Player playerNum = '3'/>
        </header>
      </div>
    );
  }
}

export default App;
