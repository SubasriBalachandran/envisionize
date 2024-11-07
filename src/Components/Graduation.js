// src/Components/Graduation.js
import React from "react";
import ItemList from "./ItemList";

const graduationItems = [
  { id: 1, name: "Graduation Cap & Gown", price: 150, img: "https://example.com/graduation-cap-gown.jpg" },
  { id: 2, name: "Diploma Frame", price: 80, img: "https://example.com/diploma-frame.jpg" },
  { id: 3, name: "Party Decorations", price: 200, img: "https://example.com/party-decorations.jpg" },
  { id: 4, name: "Photo Session", price: 300, img: "https://example.com/photo-session.jpg" },
  // Add more graduation items as needed
];

export default function Graduation({ addToCart }) {
  return <ItemList items={graduationItems} addToCart={addToCart} />;
}
