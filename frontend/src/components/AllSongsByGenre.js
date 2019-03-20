import React from "react";
import axios from "axios";
import DisplayAllSongs from "./DisplayAllSongs";

class AllSongsByGenre extends React.Component {
  constructor(){
    super()
    this.state = {
      allSongs: [],
      allComments: []
    }
  }

  componentDidMount = () => {
    this.getAllSongs()
    this.getAllComments()
  }

  getAllSongs = () => {
    axios
    .get("/songs")
    .then(res => {
      this.setState({
        allSongs:res.data.songs
      })
    })
  }

  getAllComments = () => {
    axios
    .get("/comments")
    .then(res => {
      this.setState({
        allComments:res.data.comments
      })
    })
  }

  render(){
    return(
      <div className="allSongsByPop">
      <h1>ALL SONGS BY POPULARITY</h1>
      <DisplayAllSongs allSongs={this.state.allSongs} allComments={this.state.allComments}/>
      </div>
    )
  }
}



export default AllSongsByGenre;
