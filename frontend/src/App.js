import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar />
        <Switch>
        <Route exact path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
