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
      allComments: [],
    }
  }

  componentDidMount = () => {
    this.getAllSongs()
  }

  getAllSongs = () => {
    axios
    .get("/songs")
    .then(res => {
console.log("this is ALLSONGS: ", res.data.songs)
      this.setState({
        allSongs:res.data.songs
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
      <div className="allSongs">
      <h1>ALL SONGS</h1>
      <h2>Search By Title</h2>
      <form onSubmit={this.handleSubmit}>
      <input type="text" value={this.state.formInput} onChange={this.handleChange} placeholder="Search by Title" className="searchBar"/>
          <input type="submit" value="Search"/>
      </form>
      <br/>
      {this.state.requestedSong ? <DisplaySingleSong  requestedSong={this.state.requestedSong}/> :   <DisplayAllSongs allSongs={this.state.allSongs} /> }
      </div>
    )
  }
}



export default AllSongs;
