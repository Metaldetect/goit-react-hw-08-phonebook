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
import { Link, NavLink, useMatch } from 'react-router-dom';

function AppBar() {
  const { isLoggedIn } = useAuth();
  const loginMatch = useMatch('/login');
  const registerMatch = useMatch('/register');

  return (
    <MuiAppBar position="static">
      <Toolbar>
        {!isLoggedIn && (
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/">Phonebook</Link>
          </Typography>
        )}
        <Typography variant="h5">
          {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
        </Typography>
        <Box sx={{ marginLeft: 'auto' }}>
          {isLoggedIn ? (
            <UserMenu />
          ) : (
            !loginMatch &&
            !registerMatch && (
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
