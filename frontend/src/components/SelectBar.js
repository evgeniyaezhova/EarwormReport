import React from "react";
import DisplayAllSongs from "./DisplayAllSongs";
import DisplaySongsByGenre from "./DisplaySongsByGenre"

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
  {selectedGenre ? <DisplaySongsByGenre allGenres={allGenres} allSongs={allSongs} allComments={allComments} selectedGenre={selectedGenre}/> : <DisplayAllSongs allSongs={allSongs} allComments={allComments}/> }
  </div>
)

}

export default SelectBar;
