import React from "react";
import ItemList from "./ItemList";

const babyShowerItems = [
  { id: 1, name: "Baby Shower Arch", price: 1200, img: "https://i.pinimg.com/564x/33/79/2d/33792d62de065c9ad611ea2b0cd6cfcb.jpg" },
  { id: 2, name: "Baby Clothes", price: 500, img: "https://i.pinimg.com/564x/51/49/77/514977b47170524aa96d3e4dc765e590.jpg" },
  { id: 3, name: "Baby Blankets", price: 300, img: "https://i.pinimg.com/564x/16/56/5c/16565c7290c416164893a4ad3214e805.jpg" },
  { id: 4, name: "Themed Decorations", price: 300, img: "https://i.pinimg.com/564x/b8/37/65/b83765f71a8554227bde2b4d8603d996.jpg" },
  { id: 5, name: "Floral Arrangements", price: 300, img: "https://i.pinimg.com/564x/b2/1e/cd/b21ecdb1b5a01738d27302f99ce0b924.jpg" },
  { id: 6, name: "Baby Shower Games", price: 300, img: "https://i.pinimg.com/564x/27/60/6d/27606d81b2e045caa78a24be7058fed0.jpg" },
  { id: 7, name: "Gender Reveal Props", price: 300, img: "https://i.pinimg.com/564x/52/3e/a2/523ea2cee74c680be1911ea0a1f41a3f.jpg" },
  { id: 8, name: "Mini gift baskets", price: 300, img: "https://i.pinimg.com/564x/3b/65/0b/3b650b8121df8abac23cf55e0a15cee1.jpg" },
  { id: 9, name: "Scented Candles", price: 300, img: "https://i.pinimg.com/564x/7c/f2/ed/7cf2ed2584632e8c11a57da2c155a7ac.jpg" },
  { id: 10, name: "Mom to be Chair", price: 300, img: "https://i.pinimg.com/564x/ab/1f/45/ab1f45c8072b5d98bebec33a65f19565.jpg" },
  { id: 11, name: "Polaroid", price: 300, img: "https://i.pinimg.com/736x/8e/ab/8b/8eab8b64db8bdb82b3c12bf9014e116f.jpg" },
  { id: 12, name: "Baby Bottles", price: 300, img: "https://i.pinimg.com/564x/21/4a/b3/214ab3947e8b991a95bbef167551c3be.jpg" },
  
];

export default function BabyShower({ addToCart }) {  // Accept addToCart as a prop
  return <ItemList items={babyShowerItems} addToCart={addToCart} />;  // Pass it down to ItemList
}
