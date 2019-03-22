import React from "react";
import DisplaySongs from "./DisplaySongs";

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
  <select value={selectedGenre} onChange={handleChange} name="selectedGenre">
  <option />
  {genreList}
  </select>
  <br />
  <br />
  {selectedGenre ? <DisplaySongs allGenres={allGenres} allSongs={allSongs} allComments={allComments} selectedGenre={selectedGenre}/> : <DisplaySongs allSongs={allSongs} allComments={allComments}/> }
  </div>
)

}

export default SelectBar;
