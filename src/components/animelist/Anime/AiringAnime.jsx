import React, { useState, useEffect } from "react";
import FavoriteButton from '../parts/favoriteIcon/FavoriteButton';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {settings} from '../../../Slider';

const Airing = () => {
  const [airingAnimeList, setAiringAnimeList] = useState([]);

  const airingAnime = async () => {
    const response = await fetch(`https://api.jikan.moe/v3/top/anime/1/airing`);
    const data = await response.json();
    // console.log(data);
    setAiringAnimeList(data.top);
  };

  useEffect(() => {
    airingAnime();
  }, []);

  return (
    <div className="category_title">
      <h1 className="h1">Airing</h1>
      <div className="topanime_container">
        <Slider {...settings}>
          {airingAnimeList.map((airingAnime, index) => (
            <div key={index} className="eachAnime_container">
              <a href={airingAnime.url} target="_blank" rel="noreferrer">
                <img src={airingAnime.image_url} alt="anime img" />
              </a>
              <FavoriteButton />
              <div className="anime_title">
                <h2>{airingAnime.title}</h2>
                <p>Rank: {airingAnime.rank}</p>
                <p>Episodes: {airingAnime.episodes}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Airing;
