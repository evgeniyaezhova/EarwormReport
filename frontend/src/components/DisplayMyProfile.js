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
        Posted by: {song.username}
        <br/>
        {song.favoritescount} {song.favoritescount == 1 ? "Favorite" : "Favorites"}
        <br/>
        </div>
      )
    }
  })

  let favoritesOfCurrentUser = allFavorites.map((favorite, i) => {
    if(favorite.favoriter === currentUser.id){
      return(
        <div key={i} className="getAllFavoritesByOneUser">
        <img src= {favorite.img_url} alt='' id="songImg"/>
        <br/>
        Title: {favorite.title}
        <br/>
        User: {favorite.username}
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
    <h3> FAVORITED </h3>
    {favoritesOfCurrentUser}
    </div>
  )
}

export default DisplayMyProfile;
