import React,{useState} from "react";
import "./AnimeList.css";
import NavBar from "../navbar/NavBar";
import TopAnime from '../animelist/topAnime/TopAnime';
import SearchAnimeResult from'../animelist/searchAnime/SearchAnimeResult';


const AnimeList = () => {
  const [search, setSearch] = useState("");
  const [animeList, setAnimeList] = useState([]);

  return (
    <div>
      <NavBar search={search} setSearch={setSearch} setAnimeList={setAnimeList} />
      {/* <TopAnime /> */}
      <SearchAnimeResult animeList={animeList} />
    </div>
  );
};

export default AnimeList;
