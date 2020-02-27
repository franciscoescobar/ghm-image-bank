import React, {useEffect} from "react";
import Header from "../Header";
import Hero from "../Hero";
import Categories from "../Categories";
import Filters from "../Filters";
import Images from "../Images";
import { filters, categories } from "../../data/index";
import { useDispatch, useSelector } from 'react-redux';
import { getProductsRequest } from '../../thunks/images';
import { getCategoriesRequest } from '../../thunks/categories';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.userReducer);
  const images = useSelector(state => state.imagesReducer);

  // Call it once in your app. At the root of your app is the best place
  toast.configure();
  
  useEffect(() => {
    getProductsRequest(1)(dispatch);
    getCategoriesRequest()(dispatch);
  }, [dispatch]);
  useEffect(() => { 
    if(user.error !== undefined && user.error !== null) {
      toast(user.error);
    }
    if(images.error !== undefined && images.error !== null) {
      toast(images.error);
    }
  }, [user.error, images.error])
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
