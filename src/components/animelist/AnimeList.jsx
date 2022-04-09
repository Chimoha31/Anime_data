import React, { useState } from "react";
import NavBar from "../navbar/NavBar";
import "./AnimeList.css";

const AnimeList = () => {
  const [search, setSearch] = useState("");

  const getAnime = async (query) => {
    const response = await fetch(
      `https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`
    ).then(res => res.json());
    console.log(response.results);
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
    </div>
  );
};

export default AnimeList;
