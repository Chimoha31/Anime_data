import React,{useState} from "react";
import "./AnimeList.css";
import NavBar from "../navbar/NavBar";
import SearchAnimeResult from'../animelist/searchAnime/SearchAnimeResult';
const AnimeList = () => {
  const [search, setSearch] = useState("");
  const [animeList, setAnimeList] = useState([]);

  return (
    <div>
      <NavBar />
      <SearchAnimeResult animeList={animeList} />
    </div>
  );
};

export default AnimeList;
