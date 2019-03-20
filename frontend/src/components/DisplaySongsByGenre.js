import React from "react";

const DisplaySongsByGenre = ({ selectedGenre, allSongs, allComments }) => {
  let songsOfOneGenre = allSongs.map((song, i) => {
    if(song.genre === selectedGenre){
      return(
        <div key={i} className="songsByGenre">
        Title: {song.title}

        </div>
      )
    }
  })
  return(
    <div>
    {songsOfOneGenre}
    </div>
  )
}

export default DisplaySongsByGenre;
