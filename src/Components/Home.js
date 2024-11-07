import React, { useEffect, useState } from 'react';

function Home() {
  // Slideshow image array
  const slideshowImages = [
    'https://lh5.googleusercontent.com/proxy/U47y8_8HB4T3IGrTq8aLyb7mvbHtMoRG5fgKPx1OnadMmRBGrSUbtLhKQXUE3RondLGoaq13Zn5cFIjWXyDaykiaJe_QbDFpfbEE2hz_itTaOS7alvigY8-WZA',
    'https://media.istockphoto.com/id/1399901638/photo/co-workers-make-flower-arrangements-for-the-party.webp?a=1&b=1&s=612x612&w=0&k=20&c=Tj0gJOrKmMpFV3cgvlIvBwQPLcE5taHsMUObR-wHKpY=',
    'https://media.istockphoto.com/id/2014634732/photo/2024-event-planner-timetable-agenda-plan-on-schedule-event-business-woman-checking-planner.webp?a=1&b=1&s=612x612&w=0&k=20&c=H9FIWrRI6nS3LXp95iRmwhKk5hYz6ena4aqwM6fkEhE=',
    'https://images.unsplash.com/photo-1653821355736-0c2598d0a63e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1666184130709-f3709060899a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://media.istockphoto.com/id/1691793939/photo/the-beautiful-decorations-cultural-program-wedding-decorations-new-year-dj-night.jpg?s=2048x2048&w=is&k=20&c=ViZDA4rloR7J6_tXCBqJF4Ixqa52pqWFVfMDgXtYCZs='
  ];

  // Collage image array
  const collageImages = [
    'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/313707/pexels-photo-313707.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/9215409/pexels-photo-9215409.jpeg?auto=compress&cs=tinysrgb&w=600'
  ];

  // Slideshow logic
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === slideshowImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change the image every 3 seconds

    return () => clearInterval(interval); // Clean up on component unmount
  }, [slideshowImages.length]);

  // Enquire Now handler for Collage
  const handleEnquireNow = (index) => {
    alert(`Enquire Now for image ${index + 1}`);
  };

  // Inline styles (CSS in JS)
  const styles = {
    home: {
      background: 'linear-gradient(135deg, #7b1fa2, #512da8)',
      color: 'white',
      padding: '50px',
      textAlign: 'center',
    },
    homeContent: {
      marginBottom: '40px',
    },
    h1: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
    },
    span: {
      color: '#ffb74d',
    },
    p: {
      fontSize: '1.2rem',
      margin: '20px 0',
    },
    btn: {
      backgroundColor: '#ff7043',
      padding: '10px 20px',
      color: 'white',
      textDecoration: 'none',
      borderRadius: '5px',
      transition: 'background-color 0.3s ease',
      display: 'inline-block',
    },
    btnHover: {
      backgroundColor: '#d84315',
    },
    slideshowContainer: {
      marginBottom: '50px',
    },
    slideshowImage: {
      width: '100%',
      maxWidth: '900px',
      height: 'auto',
      borderRadius: '10px',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    },
    collageContainer: {
      display: 'flex',
      gap: '20px',
      justifyContent: 'center',
    },
    collageItem: {
      position: 'relative',
      width: '300px',
    },
    collageImage: {
      width: '100%',
      borderRadius: '10px',
    },
    enquireButton: {
      position: 'absolute',
      bottom: '10px',
      left: '50%',
      transform: 'translateX(-50%)',
      backgroundColor: '#ff7043',
      border: 'none',
      padding: '8px 16px',
      color: 'white',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
  };

  return (
    <div style={styles.home}>
      <section>
        {/* Home Content */}
        <div style={styles.homeContent}>
          <h1 style={styles.h1}>
            We’re on a mission to bring people <span style={styles.span}>together</span>.
          </h1>
          <p style={styles.p}>
            Lasting impressions are our bread and butter, and our mission is to transform visions into reality.
            We’re committed to exceptional service and aim to make every event a memorable occasion.
          </p>
          <a href="#event" style={styles.btn}>Plan Your Event</a>
        </div>

        {/* Slideshow Section */}
        <div style={styles.slideshowContainer}>
          <img
            src={slideshowImages[currentImageIndex]}
            alt="slideshow"
            style={styles.slideshowImage}
          />
        </div>

        {/* Image Collage Section */}
        <div style={styles.collageContainer}>
          {collageImages.map((src, index) => (
            <div style={styles.collageItem} key={index}>
              <img src={src} alt={`Collage ${index}`} style={styles.collageImage} />
              <button
                style={styles.enquireButton}
                onClick={() => handleEnquireNow(index)}
              >
                Enquire Now
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
