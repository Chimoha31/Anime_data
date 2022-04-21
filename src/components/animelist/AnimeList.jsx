import React, { useState } from "react";
import "./AnimeList.css";
import NavBar from "../navbar/NavBar";
import TopAnime from "./Anime/TopAnime";
import AiringAnime from '../animelist/Anime/AiringAnime'; 
import UpcomingAnime from '../animelist/Anime/UpcomingAnime';
import OVAAnime from '../animelist/Anime/OVAAnime';
import SearchAnimeResult from "../animelist/searchAnime/SearchAnimeResult";
import FavoriteItem from '../favorite/FavoriteItem';

const AnimeList = () => {
  const [search, setSearch] = useState("");
  const [animeList, setAnimeList] = useState([]);
  const [show, setShow] = useState(false);
  const [showFavoritList, setFavoriteList] = useState(false);

    // Favorite button
    const handleFavoriteButton = () => {
      setFavoriteList(true);
      console.log(showFavoritList);
    }

  return (
    <div className="animelist_container">
      <NavBar
        search={search}
        setSearch={setSearch}
        setAnimeList={setAnimeList}
        show={show}
        setShow={setShow}
        handleFavoriteButton={handleFavoriteButton}
      />
    
      {show ? <SearchAnimeResult animeList={animeList} /> : <TopAnime />}
      {show ? [] : <AiringAnime />}
      {show ? [] : <UpcomingAnime />}
      {show ? [] : <OVAAnime />}
      {showFavoritList ? <FavoriteItem /> : []}
    </div>
  );
};

export default AnimeList;
