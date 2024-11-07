// src/Components/CorporateEvent.js
import React from "react";
import ItemList from "./ItemList";

const corporateEventItems = [
  { id: 1, name: "Conference Room Setup", price: 1000, img: "https://example.com/conference-room.jpg" },
  { id: 2, name: "AV Equipment", price: 800, img: "https://example.com/av-equipment.jpg" },
  { id: 3, name: "Catering for Staff", price: 600, img: "https://example.com/catering-staff.jpg" },
  { id: 4, name: "Marketing Materials", price: 300, img: "https://example.com/marketing-materials.jpg" },
  // Add more corporate event items as needed
];

export default function CorporateEvent({ addToCart }) {
  return <ItemList items={corporateEventItems} addToCart={addToCart} />;
}
