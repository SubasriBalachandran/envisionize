// src/Components/Wedding.js
import React from "react";
import ItemList from "./ItemList";

const weddingItems = [
  { id: 1, name: "Wedding Arch", price: 1500, img: "https://www.brides.com/thmb/Y464zK5McMUZaU_DLhuHhyCijcY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/22-blackberry-farm-cocktail-party-wedding-altar-decor-jose-villa-0124-22d38f52e88541a8a77a67dd5602c749.jpg" },
  { id: 2, name: "Bridal Bouquet", price: 1000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwMETsZwY2f8pCN1-rF88ptPQfzie7S0a7nw&s" },
  { id: 3, name: "Table Centerpieces", price: 500, img: "https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/2017/11/27162645/DIY-Centerpiece-Ideas.png" },
  { id: 4, name: "Lighting", price: 800, img: "https://m.media-amazon.com/images/I/61fPsVBfQ4L._AC_UF894,1000_QL80_.jpg" },
  { id: 5, name: "Candles", price: 1500, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFpO6PXddYvf3Oki05avSIEhSQAOZC_N-kOg&s" },
  { id: 6, name: "Escorts cards", price: 1000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVX99xP_1wZETOXGFTf212bg5uRfg64FgYLg&s" },
  { id: 7, name: "Cake topper", price: 500, img: "https://caketoppersindia.com/cdn/shop/products/15_b4937ed2-05ba-434c-b0b8-5ebe3efab155.png?v=1620032540" },
  { id: 8, name: "Personalized Drinkware", price: 800, img: "https://www.thesparklestory.in/cdn/shop/products/PersonalizedCeramicCoffeeMug_600x.jpg?v=1677765185" },
  { id: 9, name: "Salad Plate", price: 1500, img: "https://images.pexels.com/photos/8112999/pexels-photo-8112999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { id: 10, name: "Furniture", price: 1500, img: "https://image.made-in-china.com/2f0j00sKgaSHOIglYQ/Luxury-Royal-Cheap-King-Throne-Chair-Gold-Wedding-Chair-for-Bride-and-Groom.jpg" },
  { id: 11, name: "Confetti", price: 1500, img: "https://images.squarespace-cdn.com/content/v1/6025614a26d81204c5b4cb7a/1620620336989-W27XT1JE9J7JTM57885G/3.png" },
  { id: 12, name: "Ring Pillow", price: 1500, img: "https://img1.etsystatic.com/032/0/6768696/il_fullxfull.586161255_td75.jpg" },
  
];

export default function Wedding({ addToCart }) {  
  
  return <ItemList items={weddingItems} addToCart={addToCart} />;  // Pass it down to ItemList
}
