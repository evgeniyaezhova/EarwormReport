import React from "react";
import axios from "axios";
import DisplaySongs from "./DisplaySongs";
import "./styling/AllSongs.css"

class AllSongs extends React.Component {
  constructor(){
    super()
    this.state = {
      formInput: "",
      requestedSong: null,
      allSongs: [],
      allComments: [],

      currentUser: {}
    }
  }

  componentDidMount = () => {
    this.getAllSongs()
    this.getAllComments()
    this.getAllUsers()
  }

  getAllSongs = () => {
    axios
    .get("/songs")
    .then(res => {
      console.log("this is ALL SONGS: ", res)
      this.setState({
        allSongs:res.data.songs
      })
    })
  }

  getAllComments = () => {
    axios
    .get("/comments")
    .then(res => {
        console.log("this is ALL COMMENTS: ", res)
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

  handleChange = (e) => {
  this.setState({
    formInput: e.target.value
  })
}

  // handleComment = (e) => {
  // this.setState({
  //   commentInput: e.target.value
  // })
  // }

handleSubmit = (e) => {
  e.preventDefault();
  if(this.state.formInput){
    let search = this.state.formInput.toLowerCase()

    let isSong = this.state.allSongs.filter(song => {
        let lowerTitle = song.title.toLowerCase()

        return lowerTitle.includes(search)
    })
    if(isSong[0]){
      console.log("isSong: ", isSong)
             this.setState({ requestedSong: isSong })
         } else {
             this.setState({ requestedSong: "Not Found" })
         }
  }
  this.setState({
    formInput: ""
  })
}


  render(){
// debugger
    return(
      <div className="allSongsParent">
        <div className="allSongs">
          <div className="searchParent">
              <div className="searchDiv">
                <h1>Search By Title</h1>
                <form onSubmit={this.handleSubmit}>
                <div className="searchInput">
                    <input type="text" value={this.state.formInput} onChange={this.handleChange} placeholder="Type in the title" className="searchBar"/>
                      <input type="submit" value="Search" className="searchButton"/>
                </div>
                </form>
              </div>
            </div>
            <div className="displayParent">
            <div className="displaySongs">
              {this.state.requestedSong ?
                <DisplaySongs
                allSongs={this.state.requestedSong}
                allComments={this.state.allComments}
                commentInput={this.state.commentInput}
                currentUser={this.state.currentUser}
                handleComment={this.handleComment}/>
                :
                <DisplaySongs
                allSongs={this.state.allSongs}
                allComments={this.state.allComments}
                currentUser={this.state.currentUser}
                handleComment={this.handleComment} /> }
            </div>
            </div>
        </div>
      </div>
    )
  }
}



export default AllSongs;
