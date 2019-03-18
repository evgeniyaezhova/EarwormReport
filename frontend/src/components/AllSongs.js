import React from "react";
import axios from "axios";
import DisplayAllSongs from "./DisplayAllSongs";


class AllSongs extends React.Component {
  constructor(){
    super()
    this.state = {
      allSongs: [],

    }
  }

  componentDidMount = () => {
    this.getAllSongs()
  }

  getAllSongs = () => {
    axios
    .get("/songs")
    .then(res => {
      // debugger
      this.setState({
        allSongs:res.data.songs
      })
    })
  }

  render(){
    // debugger
    return(
      <div className="allSongs">
      <h1>ALL SONGS</h1>
      <DisplayAllSongs allSongs={this.state.allSongs}/>
      </div>
    )
  }
}



export default AllSongs;
