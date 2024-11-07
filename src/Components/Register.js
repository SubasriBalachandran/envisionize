import { Box, Button, Container, FormControl, InputLabel, Link, MenuItem, Select, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import backgroundVideo from '../Assets/background.mp4'; // Correct path based on your folder structure

const countries = [
  { code: 'US', name: 'United States (+1)' },
  { code: 'IN', name: 'India (+91)' },
  { code: 'UK', name: 'United Kingdom (+44)' },
  // Add more countries as needed
];

const Register = () => {
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('US'); // Default country code
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    // Password validation
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&])(?=.{8,})/;
    const phoneNumberRegex = /^\d{10}$/; // Exactly 10 digits
    const pincodeRegex = /^\d{6}$/;

    if (!passwordRegex.test(password)) {
      setErrorMessage('Password must be at least 8 characters long, with at least 1 uppercase letter and 1 special character.');
      return;
    }

    if (!phoneNumberRegex.test(phoneNumber)) {
      setErrorMessage('Phone number must be exactly 10 digits long.');
      return;
    }

    if (!pincodeRegex.test(pincode)) {
      setErrorMessage('Pincode must be 6 digits.');
      return;
    }

    // Clear error message and proceed with sign-up
    setErrorMessage('');
    alert('Sign-up successful!');
    
    // Clear input fields
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setPhoneNumber('');
    setCity('');
    setPincode('');

    // Redirect to home page or sign-in page
    navigate('/');
  };

  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100vh',
        width: '100vw',
        overflow: 'auto',
        zIndex: -1,
      }}
    >
      <video
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          minWidth: '100%',
          minHeight: '100%',
          width: 'auto',
          height: 'auto',
          zIndex: -1,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Container 
        component="main" 
        maxWidth="sm"  // Limit the width for better form presentation
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%', // Ensure the container takes full height
          position: 'relative', // Relative positioning to place over video
          zIndex: 1, // Ensure the form is above the video
          padding: '100px 20px 20px', // Add padding for better spacing (top, right & left, bottom)
          backgroundColor: 'rgba(255, 255, 255, 0.9)', // Semi-transparent background
          borderRadius: '8px',
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
        }}
      >
        <Box className="signup-box" sx={{ width: '100%' }}>
          <Typography component="h1" variant="h5" className="signup-header" align="center">
            Events, Anytime, Anywhere!
          </Typography>

          <form onSubmit={handleSignUp}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="firstname"
              label="First Name"
              name="firstname"
              autoComplete="name"
              placeholder="Enter your firstname" 
              autoFocus
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="lastname"
              label="Last Name"
              name="lastname"
              autoComplete="name"
              placeholder="Enter your lastname" 
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              placeholder="XYZ@gmail.com" 
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              placeholder="must be 8 characters" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Box display="flex" alignItems="center" marginY={1}>
              <Select
                variant="outlined"
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                displayEmpty
                style={{ width: '30%', marginRight: '10px' }}
              >
                {countries.map((country) => (
                  <MenuItem key={country.code} value={country.code}>
                    {country.name}
                  </MenuItem>
                ))}
              </Select>

              <TextField
                variant="outlined"
                required
                fullWidth
                id="phoneNumber"
                label="Phone Number"
                name="phoneNumber"
                placeholder="Enter your phone number" 
                autoComplete="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </Box>
            
            <FormControl variant="outlined" fullWidth required margin="normal">
                <InputLabel id="city-label">City</InputLabel>
                <Select
                    labelId="city-label"
                    id="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    label="City"
                >
                    <MenuItem value="city1">Coimbatore</MenuItem>
                    <MenuItem value="city2">Chennai</MenuItem>
                    <MenuItem value="city3">Salem</MenuItem>
                    <MenuItem value="city4">Tirupur</MenuItem>
                    <MenuItem value="city5">Erode</MenuItem>
                    {/* Add more cities as needed */}
                </Select>
            </FormControl>

            <TextField
              variant="outlined"
              required
              fullWidth
              id="pincode"
              label="Pincode"
              name="pincode"
              placeholder="Enter your pincode"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className="submit-button"
              sx={{ marginTop: '20px' }} // Add margin for spacing
            >
              Sign Up
            </Button>
          </form>

          {errorMessage && (
            <Typography color="error" align="center" className="error-message">
              {errorMessage}
            </Typography>
          )}

          <Typography variant="body2" color="textSecondary" align="center" className="signup-footer">
            Already have an account?{' '}
            <Link href="/login" variant="body2">
              Sign in
            </Link>
          </Typography>
        
          <Typography variant="body2" color="textSecondary" align="center" className="signup-terms">
            By signing up you agree to the{' '}
            <Link href="/terms" variant="body2">
              Terms of Use
            </Link>
            ,{' '}
            <Link href="/privacy" variant="body2">
              Privacy Policy
            </Link>
            , and{' '}
            <Link href="/cookie" variant="body2">
              Cookie Policy
            </Link>.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Register;
