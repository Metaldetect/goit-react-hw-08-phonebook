import React from 'react';
import { Container, Typography } from '@mui/material';

const Home = () => {
  return (
    <Container>
      <Typography
        variant="h4"
        sx={{ fontWeight: 700, fontSize: 30, textAlign: 'center' }}
      >
        Welcome to the Home Page!
      </Typography>
    </Container>
  );
};

export default Home;
