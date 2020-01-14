import React from 'react';
import Header from '../Header';
import Hero from '../Hero';
import Categories from '../Categories';
import Filters from '../Filters';
import Images from '../Images';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Categories categories={
          [
            {selected: false,text:"Terreno"},
            {selected: true,text:"Azul"},
            {selected: false,text:"Tecnología"},
            {selected: false,text:"Estrellas"},
            {selected: false,text:"Campo"},
            {selected: false,text:"Estrellas"},
            {selected: false,text:"Campo"},
            {selected: false,text:"Estrellas"},
            {selected: false,text:"Campo"},
            {selected: false,text:"Valle"},
            {selected: false,text:"Ropa"},
            {selected: false,text:"Gente"},
            {selected: false,text:"Gente"},
            {selected: false,text:"Gente"},
            {selected: true, text:"Ciudades"}
          ]} />
      <Filters filters={[{selected: false, text:"Recientes"}, {selected: true,text: "Populares"}, {selected: false, text:"Precio"}]}/>
      <Images images={
          [
            {src: "https://images.pexels.com/photos/3429761/pexels-photo-3429761.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", alt: "anyImage"},
            {src: "https://images.pexels.com/photos/3473492/pexels-photo-3473492.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", alt: "anyImage"},
            {src: "https://images.pexels.com/photos/3522094/pexels-photo-3522094.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", alt: "anyImage"},
            {src: "https://images.pexels.com/photos/3429761/pexels-photo-3429761.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", alt: "anyImage"},
            {src: "https://images.pexels.com/photos/3473492/pexels-photo-3473492.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", alt: "anyImage"},
            {src: "https://images.pexels.com/photos/3522094/pexels-photo-3522094.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", alt: "anyImage"},
            {src: "https://images.pexels.com/photos/3522094/pexels-photo-3522094.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", alt: "anyImage"},
            {src: "https://images.pexels.com/photos/3522094/pexels-photo-3522094.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", alt: "anyImage"},
            {src: "https://images.pexels.com/photos/3429761/pexels-photo-3429761.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", alt: "anyImage"},
            {src: "https://images.pexels.com/photos/3473492/pexels-photo-3473492.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", alt: "anyImage"},
            {src: "https://images.pexels.com/photos/3522094/pexels-photo-3522094.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", alt: "anyImage"},
            {src: "https://images.pexels.com/photos/3431494/pexels-photo-3431494.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", alt: "anyImage"},
           ]
          }/>
    </div>
  );
}

export default App;
