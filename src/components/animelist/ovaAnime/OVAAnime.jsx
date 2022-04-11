import React, { useState, useEffect } from "react";
import "./OVAAnime.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const OVAAnime = () => {
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
      <h1 className="h1">OVA</h1>
      <div className="topanime_container">
        <Slider {...settings}>
          {OVAAnimeList.map((ovaAnime, index) => (
            <div key={index} className="eachAnime_container">
              <a href={ovaAnime.url} target="_blank" rel="noreferrer">
                <img src={ovaAnime.image_url} alt="anime img" />
              </a>
              <div className="anime_title">
                <h2>{ovaAnime.title}</h2>
                <p>Rank: {ovaAnime.rank}</p>
                <p>Score: {ovaAnime.score} / 10</p>
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
