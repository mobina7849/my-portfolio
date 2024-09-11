
import heroImage from '../../public/imgs/frontend-utvikling2024.jpg'
import React from 'react';
import { Box, Typography, Button, Container, Grid } from '@mui/material';
import Image from 'next/image';
import Mobina from '../../public/imgs/mobina.jpg'

const HeroSection: React.FC = () => {

  return (
    // <Grid sx={{    position: 'relative',
    // height: '100vh',
    // backgroundImage: `url(${"../../public/imgs/frontend-utvikling2024.jpg"})`,
    // backgroundSize: 'cover',
    // backgroundPosition: 'center',
    // color: 'white',
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
    // textAlign: 'center',
    // backgroundRepeat: 'no-repeat', // Avoid repeating the image
    // padding: '0 20px',}}>
    //   <Box sx={{
    //          position: 'absolute',
    //              top: 0,
    //              left: 0,
    //              right: 0,
    //              bottom: 0,
    //              background: 'rgba(0, 0, 0, 0.5)', // Optional: adds a dark overlay to improve text visibility
    //              zIndex: 0,
    //   }}/>
    //   <Container sx={{zIndex: 1,}} >
    //     <Image src={Mobina} width={100} height={100} style={{borderRadius:'50%'}} alt='' />
    //     <Typography variant="h2" gutterBottom>
    //       Welcome to My Portfolio
    //     </Typography>
    //     <Typography variant="h5" paragraph>
    //       I'm a passionate developer with a focus on creating beautiful and functional web experiences.
    //     </Typography>
    //     <Button variant="contained" color="primary" >
    //       Learn More
    //     </Button>
    //   </Container>
    // </Grid>

    <Box
      sx={{
        backgroundImage: `url('/public/imgs/frontend-utvikling2024.jpg')`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', // Full viewport height
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        color: '#fff', // White text for contrast
        textAlign: 'center',
      }}
    >
      {/* Overlay content */}
      <Container>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to My Portfolio
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          I am a passionate developer specialized in React, Next.js, and Material UI
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Learn More
        </Button>
      </Container>
    </Box>
  );
};



export default HeroSection;
