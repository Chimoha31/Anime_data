import React, { useState, useEffect } from "react";
import "./TopAnime.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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

  // slider
  const settings = {
    dots: false,
    infinite: false,
    centerPadding: "60px",
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="category_title">
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
