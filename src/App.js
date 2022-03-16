import React, { Component } from 'react';
import Counter from './components/counter/Counter'
import Background from './components/background/Background'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter playerNum={1}/>
        <Counter playerNum={2}/>
      </div>
    );
  }
}

export default App;