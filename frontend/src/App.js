import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AllSongs from "./components/AllSongs";
import AllSongsByPop from "./components/AllSongsByPop";
import AllSongsByGenre from "./components/AllSongsByGenre";
import './App.css';

class App extends Component {
  // while this *will* work, I'd like to think about (based on our architecture lesson we had recently) how the routing of this app might be improved. Generally, if I'm seeing a lot of "exact path" and similar root routes (for example, /songs and /songs/bypop), it means that there's an opportunity to employ nested routing.
  render() {
    return (
      <div className="App">
      <NavBar />
        <Switch>
        <Route exact path="/songs/bygenre" component={AllSongsByGenre} />
        <Route exact path="/songs/bypop" component={AllSongsByPop} />
        <Route exact path="/songs" component={AllSongs} />
        <Route exact path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
