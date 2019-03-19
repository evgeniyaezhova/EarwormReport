import React from "react";

const DisplaySingleSong = ({ requestedSong }) => {
  if(requestedSong === "Not Found"){
    return(
      <div className="notFound">
       Sorry, it looks like we do not have that song yet. You can add new songs to our library in the Posted section of your profile page
      </div>
    )
  }
  return(requestedSong.map((song, i) => {
    return(
      <div key={i} className="songdeets">
      <img src= {song.img_url} alt='' id="songImg"/>
      <br/>
      Name: {song.title}
      <br/>
      User: {song.username}
      <br/>
      </div>
    )
  })
  )
}

export default DisplaySingleSong;
