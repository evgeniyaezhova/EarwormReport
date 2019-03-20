import React from "react";
import axios from "axios";
import DisplayAllSongs from "./DisplayAllSongs";
import SelectBar from "./SelectBar";

class AllSongsByGenre extends React.Component {
  constructor(){
    super()
    this.state = {
      allSongs: [],
      allComments: [],
      allGenres: []
    }
  }
  // this.getAllComments()

  componentDidMount = () => {
    this.getAllSongs()
    this.getAllComments()
    this.getAllGenres()
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

  getAllGenres = () => {
    axios
    .get("/genres")
    .then(res => {
      console.log("this is GENRES RES: ", res)
      this.setState({
        allGenres: res.data.genres
      })
    })
  }


  render(){
    return(
      <div className="allSongsByGenre">
      <h1>ALL SONGS BY GENRE</h1>
      <SelectBar allGenres={this.state.allGenres} />
      <DisplayAllSongs allSongs={this.state.allSongs} allComments={this.state.allComments} />
      </div>
    )
  }
}



export default AllSongsByGenre;
