import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputSearch from "./InputSearch";


const NavBar = ({search, setSearch, setAnimeList, show, setShow }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
           <Link to="/animelist">Searching Anime</Link>
          </Typography>
          <InputSearch search={search} setSearch={setSearch} setAnimeList={setAnimeList} show={show} setShow={setShow} />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
