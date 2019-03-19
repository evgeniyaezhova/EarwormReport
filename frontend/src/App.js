import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AllSongs from "./components/AllSongs";
import AllSongsByPop from "./components/AllSongsByPop";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar />
        <Switch>
        <Route exact path="/songs/bypop" component={AllSongsByPop} />
        <Route exact path="/songs" component={AllSongs} />
        <Route exact path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
