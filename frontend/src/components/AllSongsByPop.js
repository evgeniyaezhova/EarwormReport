import React from "react";
import axios from "axios";
import DisplaySongs from "./DisplaySongs";

class AllSongsByPop extends React.Component {
  constructor(){
    super()
    this.state = {
      allSongs: [],
      allComments: [],
      currentUser: {}
    }
  }

  componentDidMount = () => {
    this.getAllSongsByPop()
    this.getAllComments()
    this.getAllUsers()
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

  getAllUsers = () => {
    axios
    .get("/users")
    .then(res => {
      console.log("This is USERS RES: ", res.data.users)
      console.log("this.is CURRENT USER: ", res.data.users[0])
      this.setState({
        currentUser: res.data.users[0]
      })
    })
  }

  render(){
    return(
      <div className="allSongsParent">
        <div className="allSongs">
          <div className="displayParent">
            <div className="displaySongs">
            <DisplaySongs allSongs={this.state.allSongs} allComments={this.state.allComments}
            currentUser={this.state.currentUser}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}



export default AllSongsByPop;
