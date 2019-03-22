import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";

const DisplaySongs = ({ allSongs, allComments, commentInput, currentUser, handleComment, selectedGenre }) => {
  if(allSongs === "Not Found"){
    return(
      <div className="notFound">
       Sorry, it looks like we do not have that song yet. You can add new songs to our library in the Posted section of your profile page
      </div>
    )
  } else if(selectedGenre){
    return(
      allSongs.map((song, i) => {
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
    )
  } else {

  return(allSongs.map((song, i) => {

    return (
      <div className="singleSongDiv" key={i}>
      <img src= {song.img_url} alt='' id="songImg"/>
      <br/>
      Title: {song.title}
      <br/>
      Posted by:
      <Link to={"/profile/" + song.userid}>{song.username}</Link>
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
      }

    )}

    Add Comment:
    <form onSubmit={(e) => {
      if(commentInput){
        axios
        .post("/comments", {
          comment_body: commentInput,
          user_id: currentUser.id,
          song_id: song.songid
        })

      }
    }}>
    <input type="text" placeholder="Add a comment" value={commentInput} onChange={handleComment} />
        <input type="submit" value="Submit"/>
    </form>
      </div>

    )
  }))
}
}

export default DisplaySongs;
