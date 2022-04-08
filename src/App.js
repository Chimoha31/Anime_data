import "./App.css";
import Hero from "./components/hero/Hero";
import NavBar from "./components/navbar/NavBar";
import AnimeList from "./components/animelist/AnimeList";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Hero />} />
        <Route path="/animelist" element={<AnimeList />} />
      </Routes>
    </Router>
  );
};

export default App;
