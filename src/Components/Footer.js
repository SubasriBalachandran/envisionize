import React from 'react';
import { Container, Grid, Typography, Link, Box } from '@mui/material';

const Footer = () => {
    return (
        <Box
            sx={{
                backgroundColor: '#f5f5f5',
                padding: '40px 0',
                borderTop: '1px solid #e0e0e0',
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    {/* Section 1: About */}
                    <Grid item xs={12} md={3}>
                        <Typography variant="h6" gutterBottom>
                            About Us
                        </Typography>
                        <Typography variant="body2">
                            We offer an immersive AR platform where you can explore and buy event-related products like wedding décor, birthday accessories, and more. Transform your event experience with us!
                        </Typography>
                    </Grid>

                    {/* Section 2: Quick Links */}
                    <Grid item xs={12} md={3}>
                        <Typography variant="h6" gutterBottom>
                            Quick Links
                        </Typography>
                        <ul style={{ listStyleType: 'none', padding: 0 }}>
                            <li><Link href="/products" underline="hover">Products</Link></li>
                            <li><Link href="/events" underline="hover">Event Ideas</Link></li>
                            <li><Link href="/about" underline="hover">About Us</Link></li>
                            <li><Link href="/contact" underline="hover">Contact Us</Link></li>
                        </ul>
                    </Grid>

                    {/* Section 3: Help & Support */}
                    <Grid item xs={12} md={3}>
                        <Typography variant="h6" gutterBottom>
                            Help & Support
                        </Typography>
                        <ul style={{ listStyleType: 'none', padding: 0 }}>
                            <li><Link href="/faq" underline="hover">FAQs</Link></li>
                            <li><Link href="/shipping" underline="hover">Shipping & Returns</Link></li>
                            <li><Link href="/terms" underline="hover">Terms & Conditions</Link></li>
                            <li><Link href="/privacy" underline="hover">Privacy Policy</Link></li>
                        </ul>
                    </Grid>

                    {/* Section 4: Stay Connected */}
                    <Grid item xs={12} md={3}>
                        <Typography variant="h6" gutterBottom>
                            Stay Connected
                        </Typography>
                        <Typography variant="body2">
                            Subscribe to our newsletter and stay updated on the latest products, offers, and event ideas!
                        </Typography>
                        {/* Placeholder for email subscription */}
                        <Box sx={{ mt: 2 }}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                style={{
                                    padding: '10px',
                                    width: '80%',
                                    border: '1px solid #ccc',
                                    borderRadius: '4px',
                                }}
                            />
                            <button
                                style={{
                                    padding: '10px 20px',
                                    backgroundColor: '#1976d2',
                                    color: '#fff',
                                    border: 'none',
                                    borderRadius: '4px',
                                    marginLeft: '10px',
                                }}
                            >
                                Subscribe
                            </button>
                        </Box>
                    </Grid>
                </Grid>

                {/* Copyright */}
                <Box sx={{ textAlign: 'center', marginTop: '40px' }}>
                    <Typography variant="body2" color="textSecondary">
                        © {new Date().getFullYear()} Envisionize. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
