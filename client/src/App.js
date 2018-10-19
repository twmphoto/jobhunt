import React, { Component } from 'react';
import HomePage from '../src/components/homepage/homepage';
import './App.css';
import {Router, Route, Switch} from 'react-router';
import {Link} from 'react-router-dom';
import Forms from '../src/components/forms/Forms';
import Signup from '../src/components/signup/Signup';
import Dashboard from '../src/components/dashboard/dashboard';
import Homepage from '../src/components/homepage/homepage';


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
          <Route exact path='/' component={Homepage} />
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
