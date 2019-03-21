import React from "react";

const DisplayMyProfile = ({ allUsers, currentUser, allSongs, allComments }) => {
  return(
    <div>
    <h1>{currentUser.username}</h1>
    </div>
  )
}

export default DisplayMyProfile;
