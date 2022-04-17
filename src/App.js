import "./App.css";
import Hero from "./components/hero/Hero";
import AnimeList from "./components/animelist/AnimeList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/LoginSignup/Login';
import Signup from "./components/LoginSignup/Signup";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Hero />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/animelist" element={<AnimeList />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
