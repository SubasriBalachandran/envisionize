// import { Button, Card, CardContent, Typography } from "@mui/material";
// import React from "react";
// import { Link } from "react-router-dom";

// const items = [
//   { id: 1, name: "Balloon Decoration", price: 500, img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQu6rt0pzJB_8g4cVVkhO6TE4AijrdeeX7v3fWfnRNmAod60CxAEfyj1mw4TekNXPiRGiYIb16k5vP_GlicbhaVgE5wcdbVRav-WJiAS4Y9" },
//   { id: 2, name: "Flower Decoration", price: 800, img: "https://cdn.togetherv.com/romantic-floral-ring-arrangement-2_1661342323.webp" },
//   { id: 3, name: "Stage Lights", price: 1200, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgMCgs6-_h8jAO3JEmeFmhmZTuPCGqfng8wg&s" },
//   { id: 4, name:  "Decor Tables", price: 1200, img: "https://www.atlaseventrental.com/wp-content/uploads/2023/07/july-2-table.other_-scaled.jpg" },
//   { id: 5, name: "Stage Lights", price: 1200, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgMCgs6-_h8jAO3JEmeFmhmZTuPCGqfng8wg&s" },
//   // Add more items with images...
// ];

// export default function ItemList({ addToCart }) {
//   return (
//     <div>
//         <Button
//         variant="contained"
//         color="secondary"
//         style={{ marginTop: "20px"}}
//         component={Link}
//         to="/cart"
//       >
//         Go to Cart
//       </Button>
//       <div
//         style={{
//           display: "flex",
//           flexWrap: "wrap",
//           gap: "20px",
//           justifyContent: "center",
//         }}
//       >
//         {items.map((item) => (
//           <Card
//             key={item.id}
//             style={{
//               width: "calc(25% - 20px)", // 4 cards per row, with 20px gap
//               maxWidth: "300px", // Max width to ensure single card doesn't stretch too much
//               margin: "10px",
//               backgroundColor: "#EC9706",
//               flex: "1 1 calc(25% - 20px)", // Flex basis for 4 items per row
//             }}
//           >
//             <CardContent>
//               <img
//                 src={item.img}
//                 alt={item.name}
//                 style={{
//                   width: "100%", // Image width matches card width
//                   height: "150px", // Fixed height for image
//                   objectFit: "cover", // Ensures the image covers the area without distortion
//                   marginBottom: "10px",
//                 }}
//               />
//               <Typography variant="h5">{item.name}</Typography>
//               <Typography variant="body2">Price: ₹{item.price}</Typography>
//               <Button
//                 variant="contained"
//                 color="primary"
//                 onClick={() => {
//                   alert(`${item.name} has been added to the cart!`);
//                   addToCart(item);
//                 }}
                
//               >
//                 Add to Cart
//               </Button>
//             </CardContent>
//           </Card>
//         ))}
//       </div>

      
//     </div>
//   );
// }




import { Button, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function ItemList({ items, addToCart }) {  // Accept items as a prop
  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        style={{ marginTop: "20px" }}
        component={Link}
        to="/cart"
      >
        Go to Cart
      </Button>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {items.map((item) => (
          <Card
            key={item.id}
            style={{
              width: "calc(25% - 20px)", // 4 cards per row, with 20px gap
              maxWidth: "300px", // Max width to ensure single card doesn't stretch too much
              margin: "10px",
              backgroundColor: "#EC9706",
              flex: "1 1 calc(25% - 20px)", // Flex basis for 4 items per row
            }}
          >
            <CardContent>
              <img
                src={item.img}
                alt={item.name}
                style={{
                  width: "100%", // Image width matches card width
                  height: "400px", // Fixed height for image
                  objectFit: "cover", // Ensures the image covers the area without distortion
                  marginBottom: "10px",
                }}
              />
              <Typography variant="h5">{item.name}</Typography>
              <Typography variant="body2">Price: ₹{item.price}</Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  alert(`${item.name} has been added to the cart!`);
                  addToCart(item);
                }}
              >
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
