import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import {withRouter} from "react-router";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AllSongs from "./components/AllSongs";
import AllSongsByPop from "./components/AllSongsByPop";
import AllSongsByGenre from "./components/AllSongsByGenre";
import MyProfile from "./components/MyProfile";
import UserProfile from "./components/UserProfile";
import './App.css';

// Honestly, even though a few features are missing (for ex., favorites and adding a new song), the features you DO have implemented are so, so clean and look really good. Great work here.

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar />
        <Switch>
        <Route exact path="/profile/:id" component={withRouter(UserProfile)} />
        <Route exact path="/profile" component={MyProfile} />
        <Route exact path="/songs/bygenre" component={AllSongsByGenre} />
        <Route exact path="/songs/bypop" component={AllSongsByPop} />
        <Route path="/songs" component={AllSongs} />
        <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
