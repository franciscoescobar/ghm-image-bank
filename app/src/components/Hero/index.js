import React from "react";
import { Wrapper } from "./styled";
import { useSelector } from 'react-redux';
const Hero = () => {
  const language = useSelector(state => state.languageReducer.language);

  return(
  <Wrapper>
    <h1>{language === "en-US" ? "The best premium photos of San Juan and Argentina." : "Las mejores fotos de San Juan y Argentina."}</h1>
  </Wrapper>
)};

export default Hero;
