import React, { useState, useEffect } from "react";
import FavoriteButton from '../parts/favoriteIcon/FavoriteButton';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {settings} from '../../../Slider';

const OVAAnime = ({handleFavBtn}) => {
  const [OVAAnimeList, setOVAAnimeList] = useState([]);

  const ovaAnime = async () => {
    const response = await fetch(
      `https://api.jikan.moe/v3/top/anime/1/ova`
    );
    const data = await response.json();
    console.log(data.top);
    setOVAAnimeList(data.top);
  };

  useEffect(() => {
    ovaAnime();
  }, []);
  
  return (
    <div className="category_title">
      <h1 className="h1">OVA</h1>
      <div className="topanime_container">
        <Slider {...settings}>
          {OVAAnimeList.map((ovaAnime, index) => (
            <div key={index} className="eachAnime_container">
              <a href={ovaAnime.url} target="_blank" rel="noreferrer">
                <img src={ovaAnime.image_url} alt="anime img" />
              </a>
              <FavoriteButton handleFavBtn={handleFavBtn} />
              <div className="anime_title">
                <h2>{ovaAnime.title}</h2>
                <p>Rank: {ovaAnime.rank}</p>
                <p>Episodes: {ovaAnime.episodes}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default OVAAnime;
