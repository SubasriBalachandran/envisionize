import React from 'react';
import { Box, Typography, Button } from '@mui/material';
const purchasedImageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjWgyaBRQ4U6jAw5qKcJQ0fKNMOv1wmniFiQ&s'; // Placeholder image

const PaymentSuccess = () => {
  return (
    <Box 
      sx={{ 
        padding: 4, 
        maxWidth: 600, 
        margin: 'auto', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        backgroundColor: 'rgba(255, 255, 255, 0.9)', 
        borderRadius: '12px', 
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', 
      }}
    >
      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
        Payment Successful!
      </Typography>

      <img 
        src={purchasedImageUrl} 
        alt="Purchased Item" 
        style={{ 
          width: '100%', 
          maxWidth: '300px', 
          borderRadius: '8px', 
          marginBottom: '16px' 
        }} 
      />

      <Typography variant="h6" align="center" gutterBottom sx={{ color: '#555' }}>
        Thank you for your purchase! Your items will reach you soon.
      </Typography>

      <Button 
        variant="contained" 
        color="primary" 
        sx={{ marginTop: 2 }} 
        onClick={() => window.location.href='/'} // Redirect to home or another page
      >
        Back to Home
      </Button>
    </Box>
  );
};

export default PaymentSuccess;
