import React, {useEffect} from "react";
import { Wrapper, SearchInput } from "./styled";
import { useSelector, useDispatch } from 'react-redux';
import { updateSearchInput } from '../../actions';
import { useDebounce } from 'use-debounce';
import { getProductsSearchedRequest, getProductsRequest } from '../../thunks/images';
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
      getProductsSearchedRequest(value, posts.page)(dispatch)
    }
    else {
      getProductsRequest(1)(dispatch);
    }
  }, [value])
  return(
  <Wrapper>
    <div>
      <h1>{language === "en-US" ? "The best premium photos of San Juan and Argentina." : "Las mejores fotos de San Juan y Argentina."}</h1>
      <div>
        <SearchInput onChange={onSearchValueChange} value={posts.searchInput} placeholder="Search for premium San Juan Photos" />
      </div>
    </div>
  </Wrapper>
)};

export default Hero;
