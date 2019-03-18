import React from "react";

const DisplaySingleSong = ({ requestedSong }) => {
  if(requestedSong === "Not Found"){
    return(
      <div className="notFound">
       Not Found
      </div>
    )
  }
  return(
    <div className="songdeets">
      Name: {requestedSong.title}
      <br/>
      <img src= {requestedSong.img_url} alt='' id="songImg"/>
      <br/>
      User: {requestedSong.user_id}
      <br/>

    </div>
  )
}

export default DisplaySingleSong;
