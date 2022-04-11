import React, { useState, useEffect } from "react";
import "./TopAnime.css";

const TopAnime = () => {
  const [topAnimeList, setTopAnimeList] = useState([]);

  const topAnime = async () => {
    const response = await fetch(
      `https://api.jikan.moe/v3/top/anime/1/bypopularity`
    );
    const data = await response.json();
    console.log(data.top);
    setTopAnimeList(data.top);
  };

  useEffect(() => {
    topAnime();
  }, []);

  return (
    <div className="category_title">
      <h1 className="h1">Top Anime</h1>
      <div className="topanime_container">
        {topAnimeList.map((topAnime, index) => (
          <div key={index} className="eachAnime_container">
            <a href={topAnime.url} target="_blank" rel="noreferrer">
              <img src={topAnime.image_url} alt="anime img" />
            </a>
            <div className="anime_title">
              <h2>{topAnime.title}</h2>
              <p>Score:{topAnime.score} / 10</p>
              <p>Episodes:{topAnime.episodes}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopAnime;
