import React from "react";
import {NavLink} from "react-router-dom";
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
      <div className="detail1">
        <div className="title">
          {song.title}
        </div>
        <div className="favsCount">
          {song.favoritescount} {song.favoritescount == 1 ? "Favorite" : "Favorites"}
        </div>
      </div>
    <div className="postedBy">
    Posted by:
     <NavLink to={"/profile/" + song.userid} className="userLink">{song.username}</NavLink>
    </div>
    <div className="commentsDiv">
    <div className="comments">
    Comments:
    </div>
    <div>
    { allComments.map((comment, i) => {
      if(comment.song_id === song.songid){
        return (
          <div key={i}>
          <NavLink to={"/profile/" + comment.userid} className="userLink">{comment.username}
          </NavLink>
          : {comment.comment_body}
          </div>
        )
      }
    } )}
    </div>
    </div>
      <div className="addComment">
        <div id="addComment">
        Add Comment:
        </div>
        <div id="commentComp">
        <AddComment currentUser={currentUser} song={song} allComments={allComments} />
        </div>
      </div>
    </div>
    </div>
  </div>
</div>
)}

export default DisplaySingleSong;
