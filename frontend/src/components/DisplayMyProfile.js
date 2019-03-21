import React from "react";

const DisplayMyProfile = ({ allUsers, currentUser, allSongs, allComments, allFavorites }) => {
  let songsOfCurrentUser = allSongs.map((song, i) => {
    if(song.userid === 1){
      return(
        <div key={i} className="getAllSongsByOneUser">
        <img src= {song.img_url} alt='' id="songImg"/>
        <br/>
        Title: {song.title}
        <br/>
        User: {song.username}
        <br/>
        {song.favoritescount} {song.favoritescount == 1 ? "Favorite" : "Favorites"}
        <br/>
        </div>
      )
    }
  })

  let favoritesOfCurrentUser = allSongs.map((song, i) => {
    if(song.userid === 1){
      return(
        <div key={i} className="getAllFavoritesByOneUser">
        <img src= {song.img_url} alt='' id="songImg"/>
        <br/>
        Title: {song.title}
        <br/>
        User: {song.username}
        <br/>
        {song.favoritescount} {song.favoritescount == 1 ? "Favorite" : "Favorites"}
        <br/>
        </div>
      )
    }
  })
  return(
    <div>
    <h1>{currentUser.username}</h1>
    <h3> POSTED </h3>
    {songsOfCurrentUser}
    <button>FAVORITED</button>
    {favoritesOfCurrentUser}
    </div>
  )
}

export default DisplayMyProfile;
