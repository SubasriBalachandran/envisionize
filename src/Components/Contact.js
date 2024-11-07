import React from "react";
import { Typography, Container, TextField, Button, Box } from "@mui/material";

const Contact = () => {
  return (
    <Container
      sx={{
        paddingTop: "40px",
        paddingBottom: "80px", // Adding space at the bottom between Contact Us and Footer
        backgroundColor: "linear-gradient(135deg, #7e57c2, #512da8)", // Violet gradient background
        color: "white",
        borderRadius: "10px",
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)", // Slight shadow for effect
        marginTop: "20px"
      }}
    >
      <Typography variant="h4" gutterBottom align="center" sx={{ color: "#411249" }}>
        Contact Us
      </Typography>

      <Box
        component="img"
        src="https://colorlib.com/wp/wp-content/uploads/sites/2/wycoff.png.avif" // Add an image above the form
        alt="Contact us"
        sx={{
          width: "100%",
          height: "auto",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      />

      <form>
        <TextField
          label="Name"
          fullWidth
          margin="normal"
          InputLabelProps={{ style: { color: "#b39ddb" } }} // Violet hint color for label
          sx={{
            backgroundColor: "white",
            borderRadius: "5px",
            marginBottom: "20px"
          }}
        />
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          InputLabelProps={{ style: { color: "#b39ddb" } }}
          sx={{
            backgroundColor: "white",
            borderRadius: "5px",
            marginBottom: "20px"
          }}
        />
        <TextField
          label="Message"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          InputLabelProps={{ style: { color: "#b39ddb" } }}
          sx={{
            backgroundColor: "white",
            borderRadius: "5px",
            marginBottom: "30px"
          }}
        />
        <Button
          variant="contained"
          color="secondary"
          sx={{
            backgroundColor: "#7e57c2", // Deep purple color
            '&:hover': { backgroundColor: "#5e35b1" }, // Hover effect
            padding: "10px 20px",
            fontSize: "16px",
            display: "block",
            margin: "0 auto", // Centering the button
          }}
        >
          Send Message
        </Button>
      </form>
    </Container>
  );
};

export default Contact;
