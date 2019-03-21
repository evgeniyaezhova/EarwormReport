import React from "react";
import axios from "axios";
import DisplayMyProfile from "./DisplayMyProfile";

class MyProfile extends React.Component {
  constructor(){
    super()
    this.state = {
      allUsers: [],
      currentUser: {},
      allSongs: [],
      allComments: []
    }
  }

  componentDidMount = () => {
    this.getAllUsers()
    this.getAllSongs()
    this.getAllComments()
  }

  getAllUsers = () => {
    axios
    .get("/users")
    .then(res => {
      console.log("This is USERS RES: ", res.data.users)
      console.log("this.is CURRENT USER: ", res.data.users[0])
      this.setState({
        allUsers: res.data.users,
        currentUser: res.data.users[0]
      })
    })
  }

  getAllSongs = () => {
    axios
    .get("/songs")
    .then(res => {
      console.log("This is SONGS RES: ", res.data.songs)
      this.setState({
        allSongs:res.data.songs
      })
    })
  }

  getAllComments = () => {
    axios
    .get("/comments")
    .then(res => {
    console.log("this is COMMENTS RES: ", res.data.comments)
      this.setState({
        allComments:res.data.comments
      })
    })
  }

  render(){
    return(
      <div>
      <h1>USER NUMBER ONE</h1>
      <DisplayMyProfile allUsers={this.state.allUsers} currentUser={this.state.currentUser} allSongs={this.state.allSongs} allComments={this.state.allComments} />
      </div>
    )
  }

}

export default MyProfile;
