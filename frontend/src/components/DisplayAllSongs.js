import React from "react";

const DisplayAllSongs = ({ allSongs, allComments }) => {
  let displaysongs = allSongs.map((song, i) => {
    // console.log("this is SONG: ", song)
    return (
      <div className="singleSongDiv" key={i}>
      <img src= {song.img_url} alt='' id="songImg"/>
      <br/>
      Title: {song.title}
      <br/>
      {song.favoritescount} {song.favoritescount == 1 ? "Favorite" : "Favorites"}
      <br/>
      <button type="button" >Favorite</button>
      <br/>
      User: {song.username}
      <br/>
      Comments: { allComments.map((comment, i) => {
        if(comment.song_id === song.id){
          return (
            <div key={i}>
            
            <br />
            {comment.comment_body }
            <br/>
            </div>
          )
        }
      }

    )}
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
