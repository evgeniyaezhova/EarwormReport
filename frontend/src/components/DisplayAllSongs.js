import React from "react";

// So, I love the modularization here. However, it seems like there's a lot of stuff here that's copied between DisplayAllSongs and DisplaySingleSong. Is there a way you can modularize this even further? Potentially by creating a single song component that you can just feed song information into?

const DisplayAllSongs = ({ allSongs, allComments }) => {
  let displaysongs = allSongs.map((song, i) => {
    // console.log("this is SONG: ", song)
    return (
      <div className="singleSongDiv" key={i}>
      <img src= {song.img_url} alt='' id="songImg"/>
      <br/>
      Title: {song.title}
      <br/>
      User: {song.username}
      <br/>
      {song.favoritescount} {song.favoritescount == 1 ? "Favorite" : "Favorites"}
      <br/>
      Comments: { allComments.map((comment, i) => {
        if(comment.song_id === song.id){
          return (
            <div key={i}>
            {comment.username}: {comment.comment_body }
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
