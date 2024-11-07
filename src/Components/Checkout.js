import React from "react";
import { useLocation, useNavigate } from "react-router-dom"; 
import { Box, Typography, Button, Paper } from "@mui/material"; 

export default function Checkout() {
  const location = useLocation();
  const navigate = useNavigate(); // Hook for navigation
  const { amount } = location.state || { amount: 0 }; 

  const loadRazorpay = () => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = displayRazorpay;
    document.body.appendChild(script);
  };

  const displayRazorpay = () => {
    const options = {
      key: "rzp_test_YK15DQ08sCj8qG", // Replace with your Razorpay Key ID
      amount: amount * 100, // Razorpay works with paise (multiply by 100)
      currency: "INR",
      name: "Event Items Purchase",
      description: "Thank you for purchasing!",
      handler: function (response) {
        alert(`Payment successful. Payment ID: ${response.razorpay_payment_id}`);
        navigate('/payment-success'); // Navigate to the success page
      },
      prefill: {
        name: "Your Name",
        email: "your.email@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#F37254",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <Box 
      sx={{ 
        padding: 4, 
        maxWidth: 500, 
        margin: 'auto', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.9)', 
        borderRadius: '12px', 
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', 
      }}
    >
      <Paper elevation={4} sx={{ padding: 4, width: '100%', borderRadius: '12px' }}>
        <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
          Checkout
        </Typography>
        <Typography variant="h6" align="center" gutterBottom sx={{ color: '#555' }}>
          Total Amount: <span style={{ color: '#F37254' }}>₹{amount}</span>
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={loadRazorpay} 
          sx={{ 
            width: '100%', 
            marginTop: 2,
            padding: 1.5,
            fontSize: '1.2rem',
            borderRadius: '8px',
            '&:hover': {
              backgroundColor: '#d26a43',
            },
          }}
        >
          Pay ₹{amount}
        </Button>
      </Paper>
    </Box>
  );
}
