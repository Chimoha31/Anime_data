import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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

  // slider
  const settings = {
    dots: true,
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
      <h1 className="h1">Airing</h1>
      <div className="topanime_container">
        <Slider {...settings}>
          {airingAnimeList.map((airingAnime, index) => (
            <div key={index} className="eachAnime_container">
              <a href={airingAnime.url} target="_blank" rel="noreferrer">
                <img src={airingAnime.image_url} alt="anime img" />
              </a>
              <div className="anime_title">
                <h2>{airingAnime.title}</h2>
                <p>Rank: {airingAnime.rank}</p>
                <p>Score: {airingAnime.score} / 10</p>
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
