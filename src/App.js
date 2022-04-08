import "./App.css";
import Hero from "./components/hero/Hero";
import NavBar from "./components/navbar/NavBar";
import AnimeList from "./components/animelist/AnimeList";

const App = () => {
  return (
    <div>
      <Hero />
      <NavBar />
      <AnimeList />
    </div>
  );
};

export default App;
