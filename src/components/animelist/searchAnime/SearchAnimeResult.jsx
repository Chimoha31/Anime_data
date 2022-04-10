import React from "react";

const SearchAnimeResult = ({animeList}) => {
  return (
    <div>
      {animeList.map((anime, index) => (
        <img src={anime.image_url} key={index} alt="anime img" />
      ))}
    </div>
  );
};

export default SearchAnimeResult;
