import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import "./styling/SingleSong.css";
import AddComment from "./AddComment"

const DisplaySingleSong = ({ song, allComments, currentUser }) => {
  return(
<div className="singleP">
  <div className="singleSongDiv">
    <div className="songImg">
      <img src= {song.img_url} alt='' id="songImg"/>
    </div>
    <div className="songDetailsParent">
    <div className="songDetails">
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
          <Link to={"/profile/" + comment.userid}>{comment.username}</Link>: {comment.comment_body}
          <br/>
          </div>
        )
      }
    } )}
    Add Comment:
    <AddComment currentUser={currentUser} song={song} allComments={allComments}/>
    </div>
    </div>
  </div>
</div>
)}

export default DisplaySingleSong;
