import React from "react";
import DisplaySongs from "./DisplaySongs";
import "./styling/AllSongs.css";
import "./styling/SingleSong.css";

const SelectBar = ({ allGenres, selectedGenre, handleChange, allSongs, allComments }) => {
  let genreList = allGenres.map((genre, i) => {
    return (
      <option key={i + 1} name="selectedGenre" >
        {genre.genre_name}
      </option>
    )
  })
// debugger
return(
  <div>
    <div className="selectBar">
      <select value={selectedGenre} onChange={handleChange} name="selectedGenre">
      <option />
      {genreList}
      </select>
    </div>
  <br />
  <br />
  <div className="displayParent">
  <div className="displaySongs">
  {selectedGenre ?
    <DisplaySongs allGenres={allGenres} allSongs={allSongs} allComments={allComments} selectedGenre={selectedGenre}/>
    :
    <DisplaySongs allSongs={allSongs} allComments={allComments}/> }
    </div>
    </div>
  </div>
)

}

export default SelectBar;
