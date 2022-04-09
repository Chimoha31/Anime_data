import "./App.css";
import Hero from "./components/hero/Hero";
import AnimeList from "./components/animelist/AnimeList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Hero />} />
          <Route path="/animelist" element={<AnimeList />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
