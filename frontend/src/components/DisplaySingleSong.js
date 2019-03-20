import React from "react";

const DisplaySingleSong = ({ requestedSong, allComments }) => {
  if(requestedSong === "Not Found"){
    return(
      <div className="notFound">
       Sorry, it looks like we do not have that song yet. You can add new songs to our library in the Posted section of your profile page
      </div>
    )
  }
  return(requestedSong.map((song, i) => {
    // debugger
    return(
      <div key={i} className="songdeets">
      <img src= {song.img_url} alt='' id="songImg"/>
      <br/>
      Title: {song.title}
      <br/>
      User: {song.username}
      <br/>
      {song.favoritescount} {song.favoritescount == 1 ? "Favorite" : "Favorites"}
      <br/>
      Comments: { allComments.map((comment, i) => {
        if(comment.song_id === song.songid){
          return (
            <div key={i}>
            {comment.username}: {comment.comment_body}
            <br/>
            </div>
          )
        }
      })}
      </div>
    )
  })
  )
}

export default DisplaySingleSong;
