import "./App.css";
import Hero from "./components/hero/Hero";
import AnimeList from "./components/animelist/AnimeList";
import { Route, Routes } from "react-router-dom";
import Login from "./components/authentication/Login";
import Signup from "./components/authentication/Signup";
import ProtectedRoute from "./components/authentication/ProtectedRoute";
import { UserAuthContextProvider } from "./components/context/AuthContext";

const App = () => {
  return (
    <>
      <UserAuthContextProvider>
        <Routes>
          <Route exact path="/" element={<Hero />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/animelist"
            element={
              <ProtectedRoute>
                <AnimeList />
              </ProtectedRoute>
            }
          />
        </Routes>
      </UserAuthContextProvider>
    </>
  );
};

export default App;
