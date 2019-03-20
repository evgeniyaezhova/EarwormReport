import React from "react";

const SelectBar = ({ allGenres }) => {
  let genreList = allGenres.map((genre, i) => {
    return (
      <option key={i + 1} name="selectedGenre" value={genre} >
        {genre.genre_name}
      </option>
    )
  })

return(
  <form>
  <select>
  <option key="0" name="selectedGenre" value=""></option>
  {genreList}
  </select>
  </form>
)

}

export default SelectBar;
