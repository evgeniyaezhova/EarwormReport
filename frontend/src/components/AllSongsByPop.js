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
  }

  getAllSongsByPop = () => {
    axios
    .get("/songs/bypop")
    .then(res => {
// debugger
      this.setState({
        allSongs:res.data.songs
      })
    })
  }

  // getAllComments = () => {
  //   axios
  //   .get("/comments")
  //   .then(res => {
  //
  //     this.setState({
  //       allComments:res.data.comments
  //     })
  //   })
  // }


  render(){
// debugger
    return(
      <div className="allSongsByPop">
      <h1>ALL SONGS BY POPULARITY</h1>
      <DisplayAllSongs allSongs={this.state.allSongs} />
      </div>
    )
  }
}



export default AllSongsByPop;
