import React from "react";
import { Wrapper, SearchInput } from "./styled";
import { useSelector } from 'react-redux';
const Hero = () => {
  const language = useSelector(state => state.languageReducer.language);

  return(
  <Wrapper>
  <div>
    <h1>{language === "en-US" ? "The best premium photos of San Juan and Argentina." : "Las mejores fotos de San Juan y Argentina."}</h1>
    <div>
      <SearchInput placeholder="Search for premium San Juan Photos" />
    </div>
  </div>
  </Wrapper>
)};

export default Hero;
