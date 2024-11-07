// src/Components/HolidayParty.js
import React from "react";
import ItemList from "./ItemList";

const holidayPartyItems = [
  { id: 1, name: "Party Hats", price: 50, img: "https://example.com/party-hats.jpg" },
  { id: 2, name: "Balloons", price: 30, img: "https://example.com/balloons.jpg" },
  { id: 3, name: "Party Streamers", price: 20, img: "https://example.com/party-streamers.jpg" },
  { id: 4, name: "Gift Bags", price: 150, img: "https://example.com/gift-bags.jpg" },
  // Add more holiday party items as needed
];

export default function HolidayParty({ addToCart }) {
  return <ItemList items={holidayPartyItems} addToCart={addToCart} />;
}
