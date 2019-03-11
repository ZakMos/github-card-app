import React, { Component } from 'react';
import CardList from './components/CardList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Hello World</p>
        <CardList />
      </div>
    );
  }
}

export default App;
