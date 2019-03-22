import React from "react";
import axios from "axios";
import DisplaySongs from "./DisplaySongs";

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
      this.setState({
        allComments:res.data.comments
      })
    })
  }

  render(){
    return(
      <div className="allSongsParent">
        <div className="allSongs">
          <div className="displayParent">
            <div className="displaySongs">
            <DisplaySongs allSongs={this.state.allSongs} allComments={this.state.allComments}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}



export default AllSongsByPop;
