import React from "react";
import ItemList from "./ItemList";

const birthdayItems = [
  { id: 1, name: "Birthday Cake", price: 200, img: "https://www.fabmood.com/inspiration/wp-content/uploads/2021/08/cake-ideas-1.jpg" },
  { id: 2, name: "Birthday Balloons", price: 50, img: "https://i5.walmartimages.com/asr/d208b7db-38d1-4269-ab47-5e214b3a3789.487c1a9783ee00a4efe9036d621dbe3c.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff" },
  { id: 3, name: "Party Hats", price: 30, img: "https://down-sg.img.susercontent.com/file/vn-11134207-7r98o-lw8cyvydvro9eb" },
  { id: 4, name: "Decorative Banners", price: 100, img: "https://i.pinimg.com/control/564x/d2/ed/b9/d2edb98cd145893e7cf02d5cf6c84ca0.jpg" },
  { id: 5, name: "Lighting", price: 100, img: "https://i.pinimg.com/564x/15/c2/0d/15c20d75581059505246db0f5c345c17.jpg" },
  { id: 6, name: "Stickers and Tattoo", price: 100, img: "https://i.pinimg.com/736x/d8/ae/cc/d8aecc28a7fd425533a568c7cbd45e96.jpg" },
  { id: 7, name: "Cake stand", price: 100, img: "https://i.pinimg.com/736x/80/19/a3/8019a33db160d94cf68cbf6df2a3c56a.jpg" },
  { id: 8, name: "Cup cake mould", price: 100, img: "https://i.pinimg.com/564x/77/6f/86/776f86f4c0ffb687e93b7848594cbc25.jpg" },
  { id: 9, name: "Candles", price: 100, img: "https://i.pinimg.com/564x/e7/3b/d6/e73bd60651b1065d1c79e9452a43be4e.jpg" },
  { id: 10, name: "Birthday polaroid", price: 100, img: "https://i.pinimg.com/736x/03/c6/f7/03c6f7860c3e3a702e212a8b3f49f1f3.jpg" },
  { id: 11, name: "Birthday invitation", price: 100, img: "https://i.pinimg.com/564x/3d/40/4c/3d404ca4696655774e7210dbf7daed55.jpg" },
  { id: 12, name: "Disco Ball", price: 100, img: "https://i.pinimg.com/564x/d3/25/4d/d3254d3f60d3932ded78e8940617edfc.jpg" },
 
];

export default function Birthday({ addToCart }) {  // Accept addToCart as a prop
  return <ItemList items={birthdayItems} addToCart={addToCart} />;  // Pass it down to ItemList
}
