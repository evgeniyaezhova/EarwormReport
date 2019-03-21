import React from "react";
import {Link} from "react-router-dom";

const DisplayAllSongs = ({ allSongs, allComments }) => {
  let displaysongs = allSongs.map((song, i) => {
    // console.log("this is SONG: ", song)
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
    <form>
    <input type="text" placeholder="Add a comment" />
        <input type="submit" value="Submit"/>
    </form>
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
