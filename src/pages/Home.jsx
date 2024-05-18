import React from "react";
import { useSelector } from "react-redux";
import { selectData } from "../pages/homeSlice";
// Components
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";

import Description from "../components/Description";
import Dataset_behavior from "../components/Dataset_behavior";
import Machine_learning_model from "../components/Machine_learning_model";
import Neuronal_Network from "../components/Neuronal_Network";

import { BackToTop } from "../components/globalStyledComponents";
import Footer from "../components/Footer";
import Final_Conclusion from "../components/Final_Conclusion ";

export default function Home() {
 

  React.useEffect(
    function () {
      document.title = `Proyecto_optimizacion `;
    },
    []
  );

  return (
    <>
      <Hero />
      <main>
        <AboutUs />
        <Description />
        <Dataset_behavior />
        <Machine_learning_model />
        <Neuronal_Network />
        <Final_Conclusion />
      </main>
      <BackToTop home={"Home"} />
      <Footer />
    </>
  );
}
