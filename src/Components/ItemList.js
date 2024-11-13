import React, { useState, useEffect } from "react";
import { Button, Card, CardContent, Typography, Dialog, DialogContent, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import RotateRightIcon from "@mui/icons-material/RotateRight";

export default function ItemList({ items, addToCart }) {
  const [ipAddress, setIpAddress] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [rotationAngle, setRotationAngle] = useState(0);

  // Fetch local IP address (for development purposes)
  useEffect(() => {
    fetch("https://api.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => setIpAddress(data.ip))
      .catch((error) => console.error("Failed to fetch IP address:", error));
  }, []);

  // Function to handle image click
  const handleImageClick = (imgUrl) => {
    setSelectedImage(imgUrl);
    setRotationAngle(0); // Reset rotation angle when opening a new image
    setOpenModal(true);
  };

  // Function to close modal
  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedImage("");
  };

  // Functions to rotate the image
  const rotateLeft = () => setRotationAngle((prevAngle) => prevAngle - 90);
  const rotateRight = () => setRotationAngle((prevAngle) => prevAngle + 90);

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
              width: "calc(25% - 20px)",
              maxWidth: "300px",
              margin: "10px",
              backgroundColor: "#D8BFD8",
              flex: "1 1 calc(25% - 20px)",
            }}
          >
            <CardContent>
              {/* On clicking the image, open modal with larger view */}
              <img
                src={item.img}
                alt={item.name}
                onClick={() => handleImageClick(item.img)}
                style={{
                  width: "100%",
                  height: "400px",
                  objectFit: "cover",
                  marginBottom: "10px",
                  cursor: "pointer",
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
                </Button>
              </center>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Modal to display the larger image */}
      <Dialog open={openModal} onClose={handleCloseModal} maxWidth="md">
        <DialogContent style={{ textAlign: "center" }}>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
            <IconButton onClick={rotateLeft} color="primary">
              <RotateLeftIcon />
            </IconButton>
            <IconButton onClick={rotateRight} color="primary">
              <RotateRightIcon />
            </IconButton>
          </div>
          <img
            src={selectedImage}
            alt="Selected"
            style={{
              width: "100%",
              height: "auto",
              transform: `rotate(${rotationAngle}deg)`,
              transition: "transform 0.3s ease",
            }}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
