import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import DisplaySingleSong from "./DisplaySingleSong";
import "./styling/SingleSong.css";
import "./styling/AllSongs.css";

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
            <div key={i} className="singleParent">
              <DisplaySingleSong
              song={song}
              allComments={allComments} currentUser={currentUser}
              commentInput={commentInput}
              handleComment={handleComment}
              />
            </div>
          )
        }
      })
    )
  } else {

  return(allSongs.map((song, i) => {
    return(
      <div key={i} className="singleParent">
        <DisplaySingleSong
        song={song}
        allComments={allComments} currentUser={currentUser}
        commentInput={commentInput}
        handleComment={handleComment}
        />
      </div>
    )
  }))
}
}

export default DisplaySongs;
