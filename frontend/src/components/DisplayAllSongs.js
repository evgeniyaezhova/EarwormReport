import React from "react";

const DisplayAllSongs = ({ allSongs }) => {
  let displaysongs = allSongs.map((song, i) => {
    console.log("this is SONG: ", song)
    return (
      <div className="singleSongDiv" key={i}>
      <img src= {song.img_url} alt='' id="songImg"/>
      <br/>
      Title: {song.title}
      <br/>
      {song.favoritescount} {song.favoritescount == 1 ? "Favorite" : "Favorites"}
      <br/>
      User: {song.username}
      <br/>
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
