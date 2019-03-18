import React from "react";
import axios from "axios";
import DisplayAllSongs from "./DisplayAllSongs";
import DisplaySingleSong from "./DisplaySingleSong";


class AllSongs extends React.Component {
  constructor(){
    super()
    this.state = {
      formInput: "",
      requestedSong: null,
      allSongs: [],
      allFavorites: [],
      allComments: [],

    }
  }

  componentDidMount = () => {
    this.getAllSongs()
    this.getAllFavorites()
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

  getAllFavorites = () => {
    axios
    .get("/favorites")
    .then(res => {

      this.setState({
        allFavorites:res.data.favorites
      })
    })
  }

  handleChange = (e) => {
  this.setState({
    formInput: e.target.value
  })
}

handleSubmit = (e) => {
  e.preventDefault();
  if(this.state.formInput){
    let search = this.state.formInput.toLowerCase()

    let isSong = this.state.allSongs.filter(song => {
        let lowerTitle = song.title.toLowerCase()

        return lowerTitle === search
    })
    if(isSong[0]){
             this.setState({ requestedSong: isSong[0] })
         } else {
             this.setState({ requestedSong: "Not Found"})
         }
  }
  this.setState({
    formInput: ""
  })
}

  render(){

    return(
      <div className="allSongs">
      <h1>ALL SONGS</h1>
      <form onSubmit={this.handleSubmit}>
      <input type="text" value={this.state.formInput} onChange={this.handleChange} placeholder="Find Your Person" className="searchBar"/>
          <input type="submit" value="Search"/>
      </form>
      {this.state.requestedSong ? <DisplaySingleSong requestedSong={this.state.requestedSong}/> :   <DisplayAllSongs allSongs={this.state.allSongs} allFavorites={this.state.allFavorites}/> }
      </div>
    )
  }
}



export default AllSongs;
