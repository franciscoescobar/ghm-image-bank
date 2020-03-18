import React, {useEffect} from "react";
import { Wrapper, SearchInput, SearchWrapper } from "./styled";
import { useSelector, useDispatch } from 'react-redux';
import { updateSearchInput } from '../../actions';
import { useDebounce } from 'use-debounce';
import { getProductsFilteredRequest, getProductsRequest } from '../../thunks/images';
const Hero = () => {
  const dispatch = useDispatch();
  const language = useSelector(state => state.languageReducer.language);
  const posts = useSelector(state => state.imagesReducer);
  const [value] = useDebounce(posts.searchInput, 800);
  const onSearchValueChange = (event) => {
    dispatch(updateSearchInput(event.target.value));
  }
  useEffect(() => {
    if(value.length >= 3){
      getProductsFilteredRequest(value, 1)(dispatch)
    }
    else {
      getProductsRequest(1)(dispatch);
    }
  }, [value, dispatch])
  return(
  <Wrapper>
    <div>
      <h1>{language === "en-US" ? "The best premium photos of San Juan and Argentina." : "Las mejores fotos de San Juan y Argentina."}</h1>
      <SearchWrapper>
        <SearchInput onChange={onSearchValueChange} value={posts.searchInput} placeholder="Search for premium San Juan Photos" />
      </SearchWrapper>
    </div>
  </Wrapper>
)};

export default Hero;
