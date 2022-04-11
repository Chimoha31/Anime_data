import React from "react";
import './SearchAnimeResult.css';
import { FavoriteBorder } from "@mui/icons-material";

const SearchAnimeResult = ({ animeList }) => {
  return (
    <div className="search_result_container">
      {animeList.map((anime, index) => (
        <div key={index} className="each_result_anime">
          <div className="result_img">
            <a href={anime.url}>
              <img src={anime.image_url} alt="anime img" />
            </a>
          </div>
          <div className="titleAndheart">
            <h3>{anime.title}</h3>
            <FavoriteBorder />
          </div>
          <h4>Episodes: {anime.episodes}</h4>
        </div>
      ))}
    </div>
  );
};

export default SearchAnimeResult;
