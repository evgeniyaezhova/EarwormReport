import React from "react";

const DisplayAllSongs = ({ allSongs, allFavorites }) => {
  let displaysongs = allSongs.map((song, i) => {
    return (
      <div className="singleSongDiv" key={i}>
      <ul>
      <li>
      Title: {song.title}
      <br/>
      <img src= {song.img_url} alt='' id="songImg"/>
      <br/>
      User: {song.user_id}
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
