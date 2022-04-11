import React,{useState, useEffect} from 'react';


const TopAnime = () => {
  const [topAnimeList, setTopAnimeList] = useState([]);

    const topAnime = async() => {
    const response = await fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`);
    const data = await response.json();
    console.log(data.top);
    setTopAnimeList(data.top);
  }
  
  useEffect(() => {
    topAnime();
  }, [])

  return (
    <div>
      {topAnimeList.map((topAnime, index) =>(
       <img src={topAnime.image_url} alt="anime img" key={index} />
      ))}
    </div>
  )
}

export default TopAnime
