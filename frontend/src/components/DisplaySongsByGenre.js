import React from "react";

const DisplaySongsByGenre = ({ selectedGenre, allSongs, allComments }) => {
  let songsOfOneGenre = allSongs.map((song, i) => {
    if(song.genre === selectedGenre){
      return(
        <div key={i} className="songsByGenre">
        <img src= {song.img_url} alt='' id="songImg"/>
        <br/>
        Title: {song.title}
        <br/>
        Posted by: {song.username}
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
    }
  })
  return(
    <div>
    {songsOfOneGenre}
    </div>
  )
}

export default DisplaySongsByGenre;
