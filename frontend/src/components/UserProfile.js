import React from "react";
import axios from "axios";
import {withRouter} from "react-router";
import DisplayMyProfile from "./DisplayMyProfile";
import "./styling/SingleSong.css";
import "./styling/AllSongs.css";
import "./styling/MyProfile.css";

class UserProfile extends React.Component {
  constructor(){
    super()
    this.state = {
      allUsers: [],
      currentUser: {},
      allSongs: [],
      allComments: [],
      allFavorites: [],
      commentInput: "",
      user: {}
    }
    console.log("this is STATE:", this.state)
  }

  componentDidMount = () => {
    this.getAllUsers()
    this.getAllSongs()
    this.getAllComments()
    this.getAllFavorites()
  }

  getAllUsers = () => {
    axios
    .get("/users")
    .then(res => {
      console.log("This is USERS RES: ", res)
      console.log("this.is CURRENT USER: ", res.data.users[0])
      this.setState({
        allUsers: res.data.users,
        currentUser: res.data.users[0],
        user: res.data.users[this.props.match.params.id - 1]
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

  getAllFavorites = () => {
    axios
    .get("/favorites")
    .then(res => {
      console.log("this is Favorites RES: ", res.data.favorites)
      this.setState({
        allFavorites: res.data.favorites
      })
    })
  }


  handleComment = (e) => {
  this.setState({
    commentInput: e.target.value
  })
  }


  render(){
    return(
      <div className="allSongsParent">
        <div className="allSongs">
          <div className="displayParent">
            <div className="displaySongs">
          <DisplayMyProfile allUsers={this.state.allUsers} currentUser={this.state.user} allSongs={this.state.allSongs} allComments={this.state.allComments} userFavoriteSongs={this.state.userFavoriteSongs} allFavorites={this.state.allFavorites}
          handleComment={this.handleComment}
          commentInput={this.state.commentInput} />
          </div>
      </div>
    </div>
  </div>
    )
  }

}

export default withRouter(UserProfile);
