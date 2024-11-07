import React from 'react';
import { Link } from 'react-router-dom';

const ThemeSelection = () => {
  return (
    <div style={{
      backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFYGfgTRVKnwAK8cq3FcilfV9GL3JeAJwzww&s")', // URL of the background image
      backgroundSize: 'cover', // Make sure the image covers the whole container
      backgroundPosition: 'center',
      padding: '20px',
      borderRadius: '10px',
      maxWidth: '600px',
      margin: '0 auto', // Center the content
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
      color: 'white', // Set text color to white for better contrast with the background
      paddingBottom: '40px' // Add extra padding at the bottom
    }}>
      <h1 style={{
        textAlign: 'center',
        color: '#f3e5f5', // Light violet for contrast against the background
        marginBottom: '20px',
        textShadow: '1px 1px 4px rgba(0, 0, 0, 0.5)' // Add text shadow for readability
      }}>Select an Event Theme</h1>
      
      <ul style={{
        listStyle: 'none', 
        padding: '0'
      }}>
        {/* Each theme list item */}
        <li style={{ marginBottom: '15px' }}>
          <Link 
            to="/themes/wedding" 
            style={{
              textDecoration: 'none',
              color: 'white',
              backgroundColor: 'rgba(149, 117, 205, 0.8)', // Semi-transparent purple background
              padding: '10px 20px',
              display: 'block',
              borderRadius: '8px',
              textAlign: 'center',
              fontWeight: 'bold'
            }}
          >
            Wedding
          </Link>
        </li>
        <li style={{ marginBottom: '15px' }}>
          <Link 
            to="/themes/birthday" 
            style={{
              textDecoration: 'none',
              color: 'white',
              backgroundColor: 'rgba(186, 104, 200, 0.8)', // Semi-transparent lighter purple
              padding: '10px 20px',
              display: 'block',
              borderRadius: '8px',
              textAlign: 'center',
              fontWeight: 'bold'
            }}
          >
            Birthday
          </Link>
        </li>
        <li style={{ marginBottom: '15px' }}>
          <Link 
            to="/themes/anniversary" 
            style={{
              textDecoration: 'none',
              color: 'white',
              backgroundColor: 'rgba(149, 117, 205, 0.8)', // Repeated color for consistency
              padding: '10px 20px',
              display: 'block',
              borderRadius: '8px',
              textAlign: 'center',
              fontWeight: 'bold'
            }}
          >
            Anniversary
          </Link>
        </li>
        <li style={{ marginBottom: '15px' }}>
          <Link 
            to="/themes/baby-shower" 
            style={{
              textDecoration: 'none',
              color: 'white',
              backgroundColor: 'rgba(206, 147, 216, 0.8)', // Semi-transparent lightest shade
              padding: '10px 20px',
              display: 'block',
              borderRadius: '8px',
              textAlign: 'center',
              fontWeight: 'bold'
            }}
          >
            Baby Shower
          </Link>
        </li>
        <li style={{ marginBottom: '15px' }}>
          <Link 
            to="/themes/baby-or-girl" 
            style={{
              textDecoration: 'none',
              color: 'white',
              backgroundColor: 'rgba(209, 196, 233, 0.8)', // Lighter transparent background
              padding: '10px 20px',
              display: 'block',
              borderRadius: '8px',
              textAlign: 'center',
              fontWeight: 'bold'
            }}
          >
            Baby or Girl
          </Link>
        </li>
        <li style={{ marginBottom: '15px' }}>
          <Link 
            to="/themes/graduation" 
            style={{
              textDecoration: 'none',
              color: 'white',
              backgroundColor: 'rgba(186, 104, 200, 0.8)',
              padding: '10px 20px',
              display: 'block',
              borderRadius: '8px',
              textAlign: 'center',
              fontWeight: 'bold'
            }}
          >
            Graduation
          </Link>
        </li>
        <li style={{ marginBottom: '15px' }}>
          <Link 
            to="/themes/holiday-party" 
            style={{
              textDecoration: 'none',
              color: 'white',
              backgroundColor: 'rgba(206, 147, 216, 0.8)',
              padding: '10px 20px',
              display: 'block',
              borderRadius: '8px',
              textAlign: 'center',
              fontWeight: 'bold'
            }}
          >
            Holiday Party
          </Link>
        </li>
        <li style={{ marginBottom: '15px' }}>
          <Link 
            to="/themes/corporate-event" 
            style={{
              textDecoration: 'none',
              color: 'white',
              backgroundColor: 'rgba(149, 117, 205, 0.8)',
              padding: '10px 20px',
              display: 'block',
              borderRadius: '8px',
              textAlign: 'center',
              fontWeight: 'bold'
            }}
          >
            Corporate Event
          </Link>
        </li>
        <li>
          <Link 
            to="/themes/reunion" 
            style={{
              textDecoration: 'none',
              color: 'white',
              backgroundColor: 'rgba(186, 104, 200, 0.8)',
              padding: '10px 20px',
              display: 'block',
              borderRadius: '8px',
              textAlign: 'center',
              fontWeight: 'bold'
            }}
          >
            Family Reunion
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ThemeSelection;
