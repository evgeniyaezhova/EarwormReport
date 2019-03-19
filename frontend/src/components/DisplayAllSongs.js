import React from "react";

const DisplayAllSongs = ({ allSongs }) => {
  let displaysongs = allSongs.map((song, i) => {
    console.log(song)
    return (
      <div className="singleSongDiv" key={i}>
      Title: {song.title}
      <br/>
      <img src= {song.img_url} alt='' id="songImg"/>
      <br/>
      Favorites: {song.favoritescount}
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
