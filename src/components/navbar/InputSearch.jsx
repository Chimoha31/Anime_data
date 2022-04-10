import React from "react";

const InputSearch = ({search, setSearch, animeList, setAnimeList}) => {

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
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Search…"
          onChange={handleChange}
          value={search}
        />
      </form>
    </div>
  );
};

export default InputSearch;
