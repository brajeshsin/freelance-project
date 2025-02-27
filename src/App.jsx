import { Typography } from "@mui/material";
import React from "react";
import Header from "./assets/components/Header";
import NavBar from "./assets/components/NavBar";
import Sliderr from "./assets/components/Sliderr";
import LeftNav from "./assets/components/LeftNav";
import Hero from "./assets/components/HeroSection/Hero";

const App = () => {
  return (
    <>
      <Header />
      <NavBar />
      <Sliderr />
      <Hero />
    </>
  );
};

export default App;
