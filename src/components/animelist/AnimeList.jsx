import React, { useState } from "react";
import NavBar from "../navbar/NavBar";
import "./AnimeList.css";

const AnimeList = () => {
  const [search, setSearch] = useState("");
  const [animeList, setAnimeList] = useState([]);

  const getAnime = async (query) => {
    const response = await fetch(
      `https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=12`
    );
    const data = await response.json();
    setAnimeList(data.results);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getAnime(search);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  // const getAnime = async() => {
  //   const response = await fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`);
  //   const data = await response.json();
  //   console.log(data);
  // }
  // getAnime();

  return (
    <div>
      <NavBar />
      <h1>AnimeList</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={search} />
      </form>
      <div>
        {animeList.map((anime, index) => (
          <img src={anime.image_url} key={index} alt="anime img" />
        ))}
      </div>
    </div>
  );
};

export default AnimeList;
