import React, { useState, useEffect } from "react";
import Style from "../styles.css";
import Navbar from "./Navbar";
import Home from "./home/Home";
import About from "./about/About";
import Portfolio from "./portfolio/Portfolio";
import Contact from "./contact/Contact";
import { Route, Routes } from "react-router-dom";
import { Box, Grid } from "@mui/material";

export default function BaseLayout() {
  let [darkMode, setDarkMode] = useState(false);

  function handleToggleDarkMode() {
    let oppositeOfCurrentDarkMode = !darkMode;
    console.log(oppositeOfCurrentDarkMode);
    localStorage.setItem("darkMode", `${oppositeOfCurrentDarkMode}`);
    setDarkMode(oppositeOfCurrentDarkMode);
  }

  useEffect(() => {
    let detectedDarkMode = eval(localStorage.getItem("darkMode"));

    if (detectedDarkMode) {
      setDarkMode(detectedDarkMode);
    } else {
      localStorage.setItem("darkMode", "false");
    }
  }, []);

  return (
    <Box className={darkMode ? Style.dark : Style.light}>
      <Grid
        container
        display={"flex"}
        flexDirection={"column"}
        minHeight={"100vh"}
        justifyContent={"space-between"}
      >
        <Grid item>
          <Navbar darkMode={darkMode} handleClick={handleToggleDarkMode} />
        </Grid>
        <Grid item flexGrow={1}>
          <Routes>
            <Route exact path={"/"} element={<Home />} />
            <Route exact path={"/about"} element={<About />} />
            <Route exact path={"/portfolio"} element={<Portfolio />} />
            <Route exact path={"/contact"} element={<Contact />} />
          </Routes>
        </Grid>
        <Grid item>
          <Box
            component={"footer"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            py={"1.2rem"}
            sx={{ opacity: 0.7 }}
            width={"100%"}
          >
            <p>
              Powered by <i class="lab la-react"></i>
            </p>
            <p>&copy; 2022</p>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
