import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operation';
import useAuth from 'hooks/useAuth';

import { Avatar, Box, Button, Typography, Container } from '@mui/material';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Container>
      <Box display="flex" alignItems="center" p={2}>
        <Avatar
          src="https://source.unsplash.com/random"
          alt="avatar"
          sx={{ width: 50, height: 50, marginRight: 2 }}
        />
        <Typography variant="h6" gutterBottom sx={{ marginRight: 2 }}>
          Welcome, {user.name}
        </Typography>
        <Button
          variant="contained"
          sx={{ backgroundColor: 'grey', color: 'white' }}
          onClick={() => dispatch(logOut())}
        >
          Logout
        </Button>
      </Box>
    </Container>
  );
};

export default UserMenu;
