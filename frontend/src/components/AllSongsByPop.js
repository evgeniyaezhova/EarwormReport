import React from "react";
import axios from "axios";
import DisplayAllSongs from "./DisplayAllSongs";

class AllSongsByPop extends React.Component {
  constructor(){
    super()
    this.state = {
      allSongs: []
    }
  }

  componentDidMount = () => {
    this.getAllSongsByPop()
  }

  getAllSongsByPop = () => {
    axios
    .get("/songs/bypop")
    .then(res => {

      this.setState({
        allSongs:res.data.songs
      })
    })
  }


  render(){

    return(
      <div className="allSongsByPop">
      <h1>ALL SONGS BY POPULARITY</h1>
      <DisplayAllSongs allSongs={this.state.allSongs} />
      </div>
    )
  }
}



export default AllSongsByPop;
