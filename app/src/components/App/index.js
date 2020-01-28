import React, { useState } from "react";
import Header from "../Header";
import Hero from "../Hero";
import Categories from "../Categories";
import Filters from "../Filters";
import Images from "../Images";
import { images, filters, categories } from "../../data/index";
function App() {
  const [filteredImages, setFilteredImages] = useState(images);
  const onImageSubmit = image => {
    setFilteredImages([...images, image]);
  };
  return (
    <div>
      <Header />
      <Hero />
      <Categories categories={categories} />
      <Filters filters={filters} />
      <Images images={images} handleSubmit={onImageSubmit} />
    </div>
  );
}

export default App;
