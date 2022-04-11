import React from "react";
import './InputSearch.css';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const InputSearch = ({ search, setSearch, setAnimeList, show, setShow }) => {
  // API--------------------------------------------------------
  const getSearchAnime = async (query) => {
    const response = await fetch(
      `https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=12`
    );
    const data = await response.json();
    setAnimeList(data.results);
    console.log(data.results);
  };
  //------------------------------------------------------------

  const handleSubmit = (e) => {
    e.preventDefault();
    getSearchAnime(search);
    console.log(search);
    setShow(true);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="search_input_container">
        <FavoriteBorderIcon className="favorite_icon"/>
        <SearchIcon className="search_icon"/>
        <input placeholder="Search…" onChange={handleChange} value={search} />
      </form>
    </>
  );
};

export default InputSearch;
