import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Carousel from 'react-material-ui-carousel';

const About = () => {
  const carouselItems = [
    {
      img: 'https://media.licdn.com/dms/image/D4D12AQEQ3Hr6rY2Ovw/article-cover_image-shrink_720_1280/0/1719495383720?e=2147483647&v=beta&t=TCPXRSkEXde8NNrIURxOktVj_mlSV5ShJTRvgiw4SpA',
      alt: 'Event Image 1',
      caption: 'Crafting memorable experiences.',
    },
    {
      img: 'https://magalybarajas.com/wp-content/uploads/sites/10981/2024/05/25_Ashlynn-and-Quinn-76.jpg',
      alt: 'Event Image 2',
      caption: 'Creating beautiful moments.',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw8YKDjcvChNO-C9Nszt99Np3-0V4I_2GtEQ&s',
      alt: 'Event Image 3',
      caption: 'Bringing visions to life.',
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1718198501449-204442b4c7a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dmlzdWFsJTIwdmlldyUyMG9mJTIwb2JqZWN0cyUyMHVzaW5nJTIwYXVnbWVudGVkJTIwcmVhbGl0eXxlbnwwfHwwfHx8MA%3D%3D',
      alt: 'Event Image 3',
      caption: 'Bringing visions to life.',
    },
    {
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFk3CGklhtxrFIG9aaJMYh4vcYKbTM42I6Ig&s',
      alt: 'Event Image 3',
      caption: 'Bringing visions to life.',
    },
    {
      img:'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/2bzxvC8K1Cv0OMSQEA7p9l/eaa3de48c71d61a4a7d9c064d7235db6/GettyImages-1351925376.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000',
      alt: 'Event Image 3',
      caption: 'Bringing visions to life.',
    }
  ];

  return (
    <Container maxWidth="lg" style={{ marginTop: '50px' }}>
      {/* Section 1: Introduction */}
      <Box textAlign="center" mb={6}>
        <Typography variant="h3" component="h1" gutterBottom>
        Transforming visions into vibrant realities.
        </Typography>
        <Typography variant="h5" color="black" paragraph>
          We’re on a mission to bring people together. Lasting impressions are our bread and butter, and
          our goal is to transform visions into reality. We’re committed to exceptional service and aim to make
          every event a memorable occasion.
        </Typography>
      </Box>

      {/* Section 2: Carousel with sliding images */}
      <Carousel animation="slide" interval={4000}>
        {carouselItems.map((item, index) => (
          <Box key={index} style={{ textAlign: 'center' }}>
            <img
              src={item.img}
              alt={item.alt}
              style={{
                width: '100%',
                maxHeight: '600px',
                objectFit: 'cover',
                borderRadius: '10px',
              }}
            />
            <Typography variant="h6" color="textSecondary" mt={2}>
              {item.caption}
            </Typography>
          </Box>
        ))}
      </Carousel>

      {/* Section 3: Our Mission */}
      <Box mt={8}>
        <Typography variant="h4" gutterBottom>
          Our Mission
        </Typography>
        <Typography variant="h5" color="black" paragraph>
          We strive to unite people by creating events that leave lasting impressions. Our mission is to transform
          your vision into a reality. We offer customized event planning services with a focus on customer satisfaction,
          aiming to create unique and unforgettable experiences for every occasion.
        </Typography>
      </Box>

      {/* Section 4: Our Values */}
      <Box mt={8}>
        <Typography variant="h4" gutterBottom>
          Our Values
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h4">Creativity</Typography>
            <Typography variant="h5" color="black">
              We believe in the power of imagination to create unique and exciting events that inspire and impress.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h4">Integrity</Typography>
            <Typography variant="h5" color="black">
              We are committed to honest and transparent communication with our clients at every step of the process.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h4">Excellence</Typography>
            <Typography variant="h5" color="black">
              We strive for perfection in every event we plan, ensuring that every detail is taken care of with precision.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Section 5: Our Services */}
      <Box mt={8}>
        <Typography variant="h3" gutterBottom>
          What We Offer
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4">Event Planning</Typography>
            <Typography variant="h5" color="black">
              From weddings to corporate events, we offer comprehensive planning services to bring your vision to life.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4">Event Design</Typography>
            <Typography variant="h5" color="black">
              Our team of designers crafts stunning visuals that reflect the theme and essence of your event.
            </Typography>
          </Grid>
        </Grid>
      </Box>

     
    </Container>
  );
};

export default About;
