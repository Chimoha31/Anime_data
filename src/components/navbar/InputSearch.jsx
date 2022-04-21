import React, { useState } from "react";
import "./InputSearch.css";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from '@mui/icons-material/Favorite';
import LogoutIcon from "@mui/icons-material/Logout";
import { useUserAuth } from "../context/AuthContext";

const InputSearch = ({ search, setSearch, setAnimeList, show, setShow }) => {
  const [error, setError] = useState("");
  const { logOut } = useUserAuth();
  // API--------------------------------------------------------
  const getSearchAnime = async (query) => {
    const response = await fetch(
      `https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=12`
    );
    const data = await response.json();
    setAnimeList(data.results);
    console.log(data.results);
  };
  //---------------------------------------------------------

  const handleSubmit = (e) => {
    e.preventDefault();
    getSearchAnime(search);
    console.log(search);
    setShow(true);
  };

  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="search_input_container">
        <FavoriteIcon className="favorite_icon" />
        <SearchIcon className="search_icon" />
        <input
          placeholder="Search…"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <LogoutIcon onClick={handleLogOut} />
      </form>
    </>
  );
};

export default InputSearch;
