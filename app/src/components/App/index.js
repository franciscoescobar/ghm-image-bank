import React, {useEffect} from "react";
import Header from "../Header";
import Hero from "../Hero";
import Categories from "../Categories";
import Filters from "../Filters";
import Images from "../Images";
import { filters, categories } from "../../data/index";
import { useDispatch } from 'react-redux';
import { getProductsRequest } from '../../thunks/images';
import { getCategoriesRequest } from '../../thunks/categories';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    getProductsRequest()(dispatch);
    getCategoriesRequest()(dispatch);
  }, [dispatch]);
  return (
    <div>
      <Header />
      <Hero />
      <Categories categories={categories} />
      <Filters filters={filters} />
      <Images />
    </div>
  );
}

export default App;
