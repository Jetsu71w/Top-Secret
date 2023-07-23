import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Page/Home';
import NotFound from './H n F/NotFound';
import Edit from './Page/Edit';
import Personal from './H n F/Personal';
import About from './Page/About';

class App extends Component {

  renderRouter(){ 
    return(
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/About" component={About} />
      <Route exact path="/people" component={Personal} />
      <Route exact path="/people/add" component={Edit} />
      <Route exact path="/people/edit/:id" component={Edit} />
      <Route component={NotFound} />
      </Switch>
    )
}

render () {
  return (
    <BrowserRouter>{this.renderRouter()}</BrowserRouter>
    );  
  }
}

export default App;
