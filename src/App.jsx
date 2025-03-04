import { Typography } from "@mui/material";
import React from "react";
import Header from "./assets/components/Header";
import NavBar from "./assets/components/NavBar";
import Sliderr from "./assets/components/Sliderr";
import LeftNav from "./assets/components/LeftNav";
import Hero from "./assets/components/HeroSection/Hero";
import FullImg from "./assets/components/HeroSection/FullImg";
import Treatment from "./assets/components/treatmentoffered/Treatment";
import Specialities from "./assets/components/specialities/Specialities";
import BoxBg from "./assets/components/specialities/BoxBg";
import ClinicDetails from "./assets/components/clinicdetails/ClinicDetails";

const App = () => {
  return (
    <>
      <Header />
      <NavBar />
      <Sliderr />
      <Hero />
      <FullImg />
      <Treatment />
      <BoxBg />
      <ClinicDetails />
    </>
  );
};

export default App;
