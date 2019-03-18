import React from "react";

const DisplayAllSongs = ({ allSongs, allFavorites }) => {
  let displaysongs = allSongs.map((song, i) => {
    // debugger
    return (
      <div className="singleSongDiv" key={i}>
      <ul>
      <li>
      Title: {song.title}
      <br/>
      <img src= {song.img_url} alt='' id="songImg"/>
      <br/>
      User: {song.username}
      <br/>
      </li>
      </ul>
      </div>
    )
  })
  return(
    <>
    {displaysongs}
    </>
  )
}

export default DisplayAllSongs;
