import React, { Component } from 'react';
import HomePage from '../src/components/homepage/homepage'
import './App.css';
import {Router, Route, Switch} from 'react-router'



class App extends Component {
  render() {
    return (
      <div className="App">
        <HomePage/>
      </div>
    );
  }
}

export default App;
