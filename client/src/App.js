import React, { Component } from 'react';
import HomePage from '../src/components/homepage/homepage'
import './App.css';
import {Router, Route, Switch} from 'react-router'
import Forms from '../src/components/forms/forms'
import Signup from '../src/components/signup/signup'
import Dashboard from '../src/components/dashboard/dashboard'



class App extends Component {
  state = {
    foo: '',
    bar: ''
  }
  render() {
    return (
      <div className="App">
        <HomePage/>
      <div>
        <Link to="/">Go Back</Link>
        <Switch>
          <Route exact path='/' component={Search} />
          <Route path='/forms/' render={(renderProps) => <Forms {...renderProps} />} />
          <Route path='/signup/' render={(renderProps) => <Signup {...renderProps} />} />
          <Route path='/dashboard/' render={(renderProps) => <Dashboard {...renderProps} />} />
        </Switch>
      </div>
      </div>
    );
  }
}



export default App;
