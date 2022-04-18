import React, { useState, useEffect } from "react";
import './TopAnime.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {useUserAuth} from '../../context/AuthContext';
import {settings} from '../../../Slider';

const TopAnime = () => {
  const [topAnimeList, setTopAnimeList] = useState([]);
  const {user} = useUserAuth();

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
      {<h3 className="mt-5 pb-2 text-center loginEmail">Welcome, <strong>{user.email}</strong></h3>}
      <h1 className="h1">Top Anime</h1>
      <div className="topanime_container">
        <Slider {...settings}>
          {topAnimeList.map((topAnime, index) => (
            <div key={index} className="eachAnime_container">
              <a href={topAnime.url} target="_blank" rel="noreferrer">
                <img src={topAnime.image_url} alt="anime img" />
              </a>
              <div className="anime_title">
                <h2>{topAnime.title}</h2>
                <p>Rank: {topAnime.rank}</p>
                <p>Score: {topAnime.score} / 10</p>
                <p>Episodes: {topAnime.episodes}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TopAnime;
