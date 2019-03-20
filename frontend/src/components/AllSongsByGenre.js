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
      allGenres: [],
      selectedGenre: "",
      formSubmitted: false
    }
  }

  componentDidMount = () => {
    this.getAllSongs()
    this.getAllComments()
    this.getAllGenres()
  }

  getAllSongs = () => {
    axios
    .get("/songs")
    .then(res => {
      console.log("This is SONGS RES: ", res)
      this.setState({
        allSongs:res.data.songs
      })
    })
  }

  getAllComments = () => {
    axios
    .get("/comments")
    .then(res => {
    console.log("this is COMMENTS RES: ", res)
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

  handleChange = (e) => {
    this.setState({
      selectedGenre: e.target.value
    })
  }

  render(){
    // debugger
    return(
      <div className="allSongsByGenre">
      <h1>ALL SONGS BY GENRE</h1>
      <SelectBar allGenres={this.state.allGenres} selectedGenre={this.state.selectedGenre} handleChange={this.handleChange} allSongs={this.state.allSongs} allComments={this.state.allComments}/>
      </div>
    )
  }
}



export default AllSongsByGenre;
