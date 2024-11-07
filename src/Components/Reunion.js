// src/Components/Reunion.js
import React from "react";
import ItemList from "./ItemList";

const reunionItems = [
  { id: 1, name: "Venue Rental", price: 2000, img: "https://example.com/reunion-venue.jpg" },
  { id: 2, name: "Catering Services", price: 500, img: "https://example.com/reunion-catering.jpg" },
  { id: 3, name: "Reunion T-Shirts", price: 25, img: "https://example.com/reunion-tshirts.jpg" },
  { id: 4, name: "Decorations", price: 300, img: "https://example.com/reunion-decorations.jpg" },
  // Add more reunion items as needed
];

export default function Reunion({ addToCart }) {
  return <ItemList items={reunionItems} addToCart={addToCart} />;
}
