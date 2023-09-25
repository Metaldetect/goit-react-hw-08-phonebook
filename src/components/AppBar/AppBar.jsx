import React from 'react';
import {
  AppBar as MuiAppBar,
  Toolbar,
  Typography,
  Box,
  Button,
} from '@mui/material';
import UserMenu from 'components/UserMenu';
import useAuth from 'hooks/useAuth';
import { Link, NavLink, useLocation } from 'react-router-dom';

function AppBar() {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  return (
    <MuiAppBar position="static">
      <Toolbar>
        {!isLoggedIn && (
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/">Home</Link>
          </Typography>
        )}
        <Typography variant="h5">
          {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
        </Typography>
        <Box sx={{ marginLeft: 'auto' }}>
          {isLoggedIn ? (
            <UserMenu />
          ) : (
            location.pathname !== '/login' &&
            location.pathname !== '/register' && (
              <Button color="inherit" component={Link} to="/login">
                Log In
              </Button>
            )
          )}
        </Box>
      </Toolbar>
    </MuiAppBar>
  );
}

export default AppBar;
