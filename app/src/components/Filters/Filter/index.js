import React from "react";
import { Wrapper } from "./styled.js";
const Filter = ({ text, selected, onfilterClicked }) => (
  <Wrapper
    onClick={() => {
      onfilterClicked(text);
    }}
    className={selected ? "selected" : ""}
  >
    {text}
  </Wrapper>
);

export default Filter;
