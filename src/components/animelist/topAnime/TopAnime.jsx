import React,{useState} from 'react';

const TopAnime = () => {
  const [shows, setShows] = useState([]);
    const searchAnime = async() => {
    const response = await fetch(`https://api.jikan.moe/v3/top/anime/1/ova`);
    const data = await response.json();

    // console.log(data.top);
    setShows(data.top);
  }
  searchAnime();

  return (
    <div>
      {shows.map((show, index) =>(
        <h1 key={index}>{show.title}</h1>
      ))}
    </div>
  )
}

export default TopAnime
