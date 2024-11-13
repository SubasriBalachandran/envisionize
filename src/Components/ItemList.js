import { Button, Card, CardContent, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react";

export default function ItemList({ items, addToCart }) {
  const [ipAddress, setIpAddress] = useState("");

  // Fetch local IP address (for development purposes)
  useEffect(() => {
    fetch("https://api.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => setIpAddress(data.ip))
      .catch((error) => console.error("Failed to fetch IP address:", error));
  }, []);

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

              {/* Add QR code */}
              {ipAddress && (
                <div style={{ marginTop: "10px", textAlign: "center" }}>
                  <QRCodeCanvas
                    value={`http://${ipAddress}:3000/product/${item.id}`}
                    size={100}
                  />
                </div>
              )}
<center>
              <Button
                variant="contained"
                color="primary"
                
                style={{ marginTop: "10px" }}
                onClick={() => {
                  alert(`${item.name} has been added to the cart!`);
                  addToCart(item);
                }}
              >
                Add to Cart
              </Button></center>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
