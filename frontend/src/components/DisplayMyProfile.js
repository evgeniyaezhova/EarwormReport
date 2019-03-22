import React from "react";
import DisplaySingleSong from "./DisplaySingleSong";

const DisplayMyProfile = ({ allUsers, currentUser, allSongs, allComments, allFavorites, commentInput, handleComment }) => {
  let songsOfCurrentUser = allSongs.map((song, i) => {
    if(song.userid === currentUser.id){
      return(
        <div key={i}>
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

  let favoritesOfCurrentUser = allFavorites.map((favorite, i) => {
    if(favorite.favoriter === currentUser.id){
      return(
        allSongs.map((song, i) => {
          if(song.songid === favorite.favoritesongid){
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
    }
  })
  return(
    <div>
    <div className="userName">
    <h1>{currentUser.username}</h1>
    </div>
    <h3>SONGS POSTED </h3>
    {songsOfCurrentUser}
    <h3>SONGS FAVORITED </h3>
    {favoritesOfCurrentUser}
    </div>
  )
}

export default DisplayMyProfile;
