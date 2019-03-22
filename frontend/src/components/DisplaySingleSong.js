import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";

const DisplaySingleSong = ({ song, allComments, currentUser, commentInput, handleComment }) => {
  return(
  <div className="singleSongDiv">
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
  e.preventDefault();
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
}

export default DisplaySingleSong;
