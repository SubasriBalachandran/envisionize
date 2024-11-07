import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Box, Button, Divider, List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Cart = ({ cartItems = [] }) => {
  const navigate = useNavigate();
  const totalAmount = cartItems.reduce((sum, item) => sum + (item.price || 0), 0);

  const handleCheckout = () => {
    if (totalAmount > 0) {
      navigate("/checkout", { state: { amount: totalAmount } });
    }
  };

  return (
    <Box
      sx={{
        padding: 2,
        maxWidth: 400,
        margin: 'auto',
        background: 'linear-gradient(135deg, rgba(189, 151, 196, 0.8), rgba(149, 117, 205, 0.8))',
        borderRadius: '10px',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
      }}
    >
      <Typography variant="h4" align="center" gutterBottom sx={{ color: '#080808' }}>
        <ShoppingCartIcon fontSize="large" /> Cart
      </Typography>
      {cartItems.length === 0 ? (
        <Typography variant="body1" align="center" color="#000000">
          Your cart is empty.
        </Typography>
      ) : (
        <>
          <List>
            {cartItems.map((item, index) => (
              <ListItem key={index} sx={{ padding: 1 }}>
                <ListItemText
                  primary={<Typography variant="h6" sx={{ color: '#272525' }}>{item.name}</Typography>}
                  secondary={<Typography variant="body2" sx={{ color: '#353235' }}>Price: ₹{item.price || 0}</Typography>}
                />
              </ListItem>
            ))}
          </List>
          <Divider sx={{ margin: '10px 0', backgroundColor: '#4d4b4d' }} />
          <Typography variant="h5" align="center" sx={{ color: '#504e4e' }}>
            Total: ₹{totalAmount}
          </Typography>
          <Box display="flex" justifyContent="center" marginTop={2}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleCheckout}
              disabled={totalAmount === 0}
              sx={{
                width: '100%',
                backgroundColor: 'rgba(149, 117, 205, 0.9)',
                '&:hover': {
                  backgroundColor: 'rgba(175, 144, 181, 0.9)',
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
                },
                color: '#fff',
              }}
            >
              Proceed to Checkout
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Cart; // Ensure you're exporting the component as default
