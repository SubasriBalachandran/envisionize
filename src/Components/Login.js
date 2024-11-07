import { Box, Button, Container, Link, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bg3Image from '../Assets/bg-3.gif'; // Correct path based on your folder structure

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSignin = async (e) => {
    e.preventDefault();

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&])(?=.{8,})/;

    // Validate password format
    if (!passwordRegex.test(password)) {
      setErrorMessage('Password must be at least 8 characters long, with at least 1 uppercase letter and 1 special character.');
      return;
    }

    setErrorMessage('');

    const signinData = {
      username,
      email,
      password,
    };

    console.log('Signin data:', signinData); // Log signin data

    // Show an alert message when Sign In button is clicked
    alert('Sign In successful!');

    // Save username to localStorage to persist across components/pages
    localStorage.setItem('user', username); // Here, "Suba" will be stored

    // Navigate to home page or the intended route
    navigate('/');
  };

  return (
    <Box
      sx={{
        position: 'relative',
        height: '100vh',
        overflow: 'auto',
        backgroundImage: `url(${bg3Image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}
      >
        <Box
          sx={{
            backgroundColor: 'rgba(128, 0, 128, 0.8)',
            borderRadius: '8px',
            padding: '20px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
            width: '100%',
          }}
        >
          <Typography component="h1" variant="h5" sx={{ color: '#fff', textAlign: 'center' }}>
            Welcome back!
          </Typography>
          <Box component="form" onSubmit={handleSignin}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Username"
              placeholder="Enter your username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              sx={{
                backgroundColor: '#e6e6fa',
                '& .MuiInputLabel-root': {
                  color: '#b0b0e0',
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#b0b0e0',
                  },
                  '&:hover fieldset': {
                    borderColor: '#7a7aff',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#5b5bdf',
                  },
                },
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Email Address"
              placeholder="example@gmail.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                backgroundColor: '#e6e6fa',
                '& .MuiInputLabel-root': {
                  color: '#b0b0e0',
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#b0b0e0',
                  },
                  '&:hover fieldset': {
                    borderColor: '#7a7aff',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#5b5bdf',
                  },
                },
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              placeholder="Must be 8 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{
                backgroundColor: '#e6e6fa',
                '& .MuiInputLabel-root': {
                  color: '#b0b0e0',
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#b0b0e0',
                  },
                  '&:hover fieldset': {
                    borderColor: '#7a7aff',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#5b5bdf',
                  },
                },
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: '#5b5bdf',
                '&:hover': {
                  backgroundColor: '#7a7aff',
                },
                marginTop: '16px',
              }}
            >
              Sign In
            </Button>
            {errorMessage && (
              <Typography color="error" align="center">
                {errorMessage}
              </Typography>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Login;
