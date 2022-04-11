import React, { useState } from "react";
import "./AnimeList.css";
import NavBar from "../navbar/NavBar";
import TopAnime from "../animelist/topAnime/TopAnime";
import AiringAnime from '../animelist/airingAnime/AiringAnime'; 
import UpcomingAnime from '../animelist/upcoming/UpcomingAnime';
import OVAAnime from '../animelist/ovaAnime/OVAAnime';
import SearchAnimeResult from "../animelist/searchAnime/SearchAnimeResult";

const AnimeList = () => {
  const [search, setSearch] = useState("");
  const [animeList, setAnimeList] = useState([]);
  const [show, setShow] = useState(false);

  return (
    <div className="animelist_container">
      <NavBar
        search={search}
        setSearch={setSearch}
        setAnimeList={setAnimeList}
        show={show}
        setShow={setShow}
      />
      {show ? <SearchAnimeResult animeList={animeList} /> : <TopAnime />}
      {show ? <SearchAnimeResult animeList={animeList} /> : <AiringAnime />}
      {show ? <SearchAnimeResult animeList={animeList} /> : <UpcomingAnime />}
      {show ? <SearchAnimeResult animeList={animeList} /> : <OVAAnime />}
      {console.log(animeList)}
    </div>
  );
};

export default AnimeList;
