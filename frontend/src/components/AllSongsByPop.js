import React from "react";
import axios from "axios";
import DisplayAllSongs from "./DisplayAllSongs";

class AllSongsByPop extends React.Component {
  constructor(){
    super()
    this.state = {
      allSongs: [],
      allComments: []
    }
  }

  componentDidMount = () => {
    this.getAllSongsByPop()
    this.getAllComments()
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

  getAllComments = () => {
    axios
    .get("/comments")
    .then(res => {
console.log("this is ALL COMMENTS: ", res.data.comments)
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



export default AllSongsByPop;
