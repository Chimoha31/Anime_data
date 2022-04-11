import React from "react";

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
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder="Search…" onChange={handleChange} value={search} />
      </form>
    </div>
  );
};

export default InputSearch;
