import React from "react";
import ItemList from "./ItemList";

const babyOrGirlItems = [
  { id: 1, name: "Baby Shower Arch", price: 1200, img: "https://m.media-amazon.com/images/I/71yFYWIki-L.jpg" },
  { id: 2, name: "Baby Clothes", price: 500, img: "https://rukminim2.flixcart.com/image/850/1000/k7jdg280/baby-care-combo/u/h/y/presents-new-born-baby-summer-wear-baby-clothes-5pcs-sets-100-original-imafpqnwwu5zebbt.jpeg?q=90&crop=false" },
  { id: 3, name: "Baby Shower Cake", price: 800, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYxFsnPFRpYiv8OmRlV5-_607JE8DLPP4mmg&s" },
  { id: 4, name: "Party Favors", price: 300, img: "https://i.etsystatic.com/7600141/r/il/52e72c/2513003039/il_570xN.2513003039_55dc.jpg" },
  { id: 5, name: "blankets", price: 300, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgD0tvB-yQHETpA7Wz3ook__o3BORK7PeS-Q&s" },
  { id: 6, name: "Table Centerpieces", price: 300, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGRu5olP893wBZIhDCZcqQvjg_-tcjCa2tpw&s" },
  { id: 7, name: "Photo Backdrop ", price: 300, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNFB7dKaMYmqMPrA1JKQ1KuirWQrPSmwMEBw&s" },
  { id: 8, name: "Themed Tablecloths ", price: 300, img: "https://i.pinimg.com/736x/da/6c/3f/da6c3f16020c2b07ab4fb041a24704a3.jpg" },
  { id: 9, name: "Plates, Cups, and Utensils", price: 300, img: "https://www.shutterstock.com/image-photo/set-empty-reusable-disposable-ecofriendly-600nw-1351796321.jpg" },
  { id: 9, name: "Candy or Treat Bags", price: 300, img: "https://i.etsystatic.com/6300556/r/il/271b92/2053167367/il_fullxfull.2053167367_rh06.jpg" },
  { id: 1, name: "Baby Shower Arch", price: 1200, img: "https://m.media-amazon.com/images/I/71yFYWIki-L.jpg" },
  { id: 2, name: "Baby Clothes", price: 500, img: "https://rukminim2.flixcart.com/image/850/1000/k7jdg280/baby-care-combo/u/h/y/presents-new-born-baby-summer-wear-baby-clothes-5pcs-sets-100-original-imafpqnwwu5zebbt.jpeg?q=90&crop=false" },
  { id: 3, name: "Baby Shower Cake", price: 800, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYxFsnPFRpYiv8OmRlV5-_607JE8DLPP4mmg&s" },
  { id: 4, name: "Party Favors", price: 300, img: "https://i.etsystatic.com/7600141/r/il/52e72c/2513003039/il_570xN.2513003039_55dc.jpg" },
  { id: 5, name: "blankets", price: 300, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgD0tvB-yQHETpA7Wz3ook__o3BORK7PeS-Q&s" },
  { id: 6, name: "Table Centerpieces", price: 300, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGRu5olP893wBZIhDCZcqQvjg_-tcjCa2tpw&s" },
  { id: 7, name: "Photo Backdrop ", price: 300, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNFB7dKaMYmqMPrA1JKQ1KuirWQrPSmwMEBw&s" },
  { id: 8, name: "Themed Tablecloths ", price: 300, img: "https://i.pinimg.com/736x/da/6c/3f/da6c3f16020c2b07ab4fb041a24704a3.jpg" },
  { id: 9, name: "Plates, Cups, and Utensils", price: 300, img: "https://www.shutterstock.com/image-photo/set-empty-reusable-disposable-ecofriendly-600nw-1351796321.jpg" },
  { id: 9, name: "Candy or Treat Bags", price: 300, img: "https://i.etsystatic.com/6300556/r/il/271b92/2053167367/il_fullxfull.2053167367_rh06.jpg" },
  { id: 1, name: "Baby Shower Arch", price: 1200, img: "https://m.media-amazon.com/images/I/71yFYWIki-L.jpg" },
  { id: 2, name: "Baby Clothes", price: 500, img: "https://rukminim2.flixcart.com/image/850/1000/k7jdg280/baby-care-combo/u/h/y/presents-new-born-baby-summer-wear-baby-clothes-5pcs-sets-100-original-imafpqnwwu5zebbt.jpeg?q=90&crop=false" },
  { id: 3, name: "Baby Shower Cake", price: 800, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYxFsnPFRpYiv8OmRlV5-_607JE8DLPP4mmg&s" },
  { id: 4, name: "Party Favors", price: 300, img: "https://i.etsystatic.com/7600141/r/il/52e72c/2513003039/il_570xN.2513003039_55dc.jpg" },
  { id: 5, name: "blankets", price: 300, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgD0tvB-yQHETpA7Wz3ook__o3BORK7PeS-Q&s" },
  { id: 6, name: "Table Centerpieces", price: 300, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGRu5olP893wBZIhDCZcqQvjg_-tcjCa2tpw&s" },
  { id: 7, name: "Photo Backdrop ", price: 300, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNFB7dKaMYmqMPrA1JKQ1KuirWQrPSmwMEBw&s" },
  { id: 8, name: "Themed Tablecloths ", price: 300, img: "https://i.pinimg.com/736x/da/6c/3f/da6c3f16020c2b07ab4fb041a24704a3.jpg" },
  { id: 9, name: "Plates, Cups, and Utensils", price: 300, img: "https://www.shutterstock.com/image-photo/set-empty-reusable-disposable-ecofriendly-600nw-1351796321.jpg" },
  { id: 9, name: "Candy or Treat Bags", price: 300, img: "https://i.etsystatic.com/6300556/r/il/271b92/2053167367/il_fullxfull.2053167367_rh06.jpg" }
  // Add more baby or girl items as needed
];

export default function BabyOrGirl({ addToCart }) {  // Accept addToCart as a prop
  return <ItemList items={babyOrGirlItems} addToCart={addToCart} />;  // Pass it down to ItemList
}
