import React from 'react';
import LoginForm from 'components/LoginForm';
import { Container, Typography } from '@mui/material';

const Home = () => (
  <Container
    sx={{
      minHeight: 'calc(50vh - 50px)',
      minWidth: 'calc(50vw - 50px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    }}
  >
    <Typography
      variant="h1"
      sx={{ fontWeight: 700, fontSize: 30, textAlign: 'center' }}
    >
      Your Page Title
    </Typography>
    <LoginForm />
  </Container>
);

export default Home;
