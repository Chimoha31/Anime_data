import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {settings} from '../../../Slider';

const UpcomingAnime = () => {
  const [upcomingAnimeList, setUpcomingAnimeList] = useState([]);

  const upcomingAnime = async () => {
    const response = await fetch(
      `https://api.jikan.moe/v3/top/anime/1/upcoming`
    );
    const data = await response.json();
    console.log(data.top);
    setUpcomingAnimeList(data.top);
  };

  useEffect(() => {
    upcomingAnime();
  }, []);

  
  return (
    <div className="category_title">
      <h1 className="h1">Upcoming</h1>
      <div className="topanime_container">
        <Slider {...settings}>
          {upcomingAnimeList.map((upcomingAnime, index) => (
            <div key={index} className="eachAnime_container">
              <a href={upcomingAnime.url} target="_blank" rel="noreferrer">
                <img src={upcomingAnime.image_url} alt="anime img" />
              </a>
              <div className="anime_title">
                <h2>{upcomingAnime.title}</h2>
                <p>Rank: {upcomingAnime.rank}</p>
                <p>Score: {upcomingAnime.score} / 10</p>
                <p>Episodes: {upcomingAnime.episodes}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default UpcomingAnime;