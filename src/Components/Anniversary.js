// src/Components/Anniversary.js
import React from "react";
import ItemList from "./ItemList";

const anniversaryItems = [
  { id: 1, name: "Anniversary Cake", price: 300, img: "https://m.media-amazon.com/images/I/61V-ikJPL4L._AC_UF1000,1000_QL80_.jpg" },
  { id: 2, name: "Decorative Flowers", price: 200, img: "https://www.jiomart.com/images/product/original/rvh9tcrhzx/groovy-dudz-happy-anniversary-decoration-items-1st-25th-50th-wedding-anniversary-decor-set-of-70-product-images-orvh9tcrhzx-p603878058-0-202308141819.jpg?im=Resize=(420,420)" },
  { id: 3, name: "Romantic Dinner Setup", price: 500, img: "https://frillx.com/cdn/shop/products/rosegold-happy-anniversary-foil-balloons-60-pcs-combo-banner-cursive-love-transparent-love-cube-box-balloons-for-wedding-anniversary-decoration-items-for-home-h-942982.jpg?v=1646291321" },
  { id: 4, name: "Photo Booth", price: 400, img: "https://www.bigsmall.in/cdn/shop/files/webp.webp?v=1698326541&width=2160" },
  { id: 1, name: "Anniversary Cake", price: 300, img: "https://m.media-amazon.com/images/I/61V-ikJPL4L._AC_UF1000,1000_QL80_.jpg" },
  { id: 2, name: "Decorative Flowers", price: 200, img: "https://www.jiomart.com/images/product/original/rvh9tcrhzx/groovy-dudz-happy-anniversary-decoration-items-1st-25th-50th-wedding-anniversary-decor-set-of-70-product-images-orvh9tcrhzx-p603878058-0-202308141819.jpg?im=Resize=(420,420)" },
  { id: 3, name: "Romantic Dinner Setup", price: 500, img: "https://frillx.com/cdn/shop/products/rosegold-happy-anniversary-foil-balloons-60-pcs-combo-banner-cursive-love-transparent-love-cube-box-balloons-for-wedding-anniversary-decoration-items-for-home-h-942982.jpg?v=1646291321" },
  { id: 4, name: "Photo Booth", price: 400, img: "https://www.bigsmall.in/cdn/shop/files/webp.webp?v=1698326541&width=2160" },
  { id: 1, name: "Anniversary Cake", price: 300, img: "https://m.media-amazon.com/images/I/61V-ikJPL4L._AC_UF1000,1000_QL80_.jpg" },
  { id: 2, name: "Decorative Flowers", price: 200, img: "https://www.jiomart.com/images/product/original/rvh9tcrhzx/groovy-dudz-happy-anniversary-decoration-items-1st-25th-50th-wedding-anniversary-decor-set-of-70-product-images-orvh9tcrhzx-p603878058-0-202308141819.jpg?im=Resize=(420,420)" },
  { id: 3, name: "Romantic Dinner Setup", price: 500, img: "https://frillx.com/cdn/shop/products/rosegold-happy-anniversary-foil-balloons-60-pcs-combo-banner-cursive-love-transparent-love-cube-box-balloons-for-wedding-anniversary-decoration-items-for-home-h-942982.jpg?v=1646291321" },
  { id: 4, name: "Photo Booth", price: 400, img: "https://www.bigsmall.in/cdn/shop/files/webp.webp?v=1698326541&width=2160" },
  { id: 1, name: "Anniversary Cake", price: 300, img: "https://m.media-amazon.com/images/I/61V-ikJPL4L._AC_UF1000,1000_QL80_.jpg" },
  { id: 2, name: "Decorative Flowers", price: 200, img: "https://www.jiomart.com/images/product/original/rvh9tcrhzx/groovy-dudz-happy-anniversary-decoration-items-1st-25th-50th-wedding-anniversary-decor-set-of-70-product-images-orvh9tcrhzx-p603878058-0-202308141819.jpg?im=Resize=(420,420)" },
  { id: 3, name: "Romantic Dinner Setup", price: 500, img: "https://frillx.com/cdn/shop/products/rosegold-happy-anniversary-foil-balloons-60-pcs-combo-banner-cursive-love-transparent-love-cube-box-balloons-for-wedding-anniversary-decoration-items-for-home-h-942982.jpg?v=1646291321" },
  { id: 4, name: "Photo Booth", price: 400, img: "https://www.bigsmall.in/cdn/shop/files/webp.webp?v=1698326541&width=2160" },
  { id: 1, name: "Anniversary Cake", price: 300, img: "https://m.media-amazon.com/images/I/61V-ikJPL4L._AC_UF1000,1000_QL80_.jpg" },
  { id: 2, name: "Decorative Flowers", price: 200, img: "https://www.jiomart.com/images/product/original/rvh9tcrhzx/groovy-dudz-happy-anniversary-decoration-items-1st-25th-50th-wedding-anniversary-decor-set-of-70-product-images-orvh9tcrhzx-p603878058-0-202308141819.jpg?im=Resize=(420,420)" },
  { id: 3, name: "Romantic Dinner Setup", price: 500, img: "https://frillx.com/cdn/shop/products/rosegold-happy-anniversary-foil-balloons-60-pcs-combo-banner-cursive-love-transparent-love-cube-box-balloons-for-wedding-anniversary-decoration-items-for-home-h-942982.jpg?v=1646291321" },
  { id: 4, name: "Photo Booth", price: 400, img: "https://www.bigsmall.in/cdn/shop/files/webp.webp?v=1698326541&width=2160" },
  { id: 1, name: "Anniversary Cake", price: 300, img: "https://m.media-amazon.com/images/I/61V-ikJPL4L._AC_UF1000,1000_QL80_.jpg" },
  { id: 2, name: "Decorative Flowers", price: 200, img: "https://www.jiomart.com/images/product/original/rvh9tcrhzx/groovy-dudz-happy-anniversary-decoration-items-1st-25th-50th-wedding-anniversary-decor-set-of-70-product-images-orvh9tcrhzx-p603878058-0-202308141819.jpg?im=Resize=(420,420)" },
  { id: 3, name: "Romantic Dinner Setup", price: 500, img: "https://frillx.com/cdn/shop/products/rosegold-happy-anniversary-foil-balloons-60-pcs-combo-banner-cursive-love-transparent-love-cube-box-balloons-for-wedding-anniversary-decoration-items-for-home-h-942982.jpg?v=1646291321" },
  { id: 4, name: "Photo Booth", price: 400, img: "https://www.bigsmall.in/cdn/shop/files/webp.webp?v=1698326541&width=2160" },
  { id: 1, name: "Anniversary Cake", price: 300, img: "https://m.media-amazon.com/images/I/61V-ikJPL4L._AC_UF1000,1000_QL80_.jpg" },
  { id: 2, name: "Decorative Flowers", price: 200, img: "https://www.jiomart.com/images/product/original/rvh9tcrhzx/groovy-dudz-happy-anniversary-decoration-items-1st-25th-50th-wedding-anniversary-decor-set-of-70-product-images-orvh9tcrhzx-p603878058-0-202308141819.jpg?im=Resize=(420,420)" },
  { id: 3, name: "Romantic Dinner Setup", price: 500, img: "https://frillx.com/cdn/shop/products/rosegold-happy-anniversary-foil-balloons-60-pcs-combo-banner-cursive-love-transparent-love-cube-box-balloons-for-wedding-anniversary-decoration-items-for-home-h-942982.jpg?v=1646291321" },
  { id: 4, name: "Photo Booth", price: 400, img: "https://www.bigsmall.in/cdn/shop/files/webp.webp?v=1698326541&width=2160" },
  // Add more anniversary items as needed
];

export default function Anniversary({ addToCart }) {
  return <ItemList items={anniversaryItems} addToCart={addToCart} />;
}
