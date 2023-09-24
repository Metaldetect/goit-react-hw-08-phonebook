import * as React from 'react';
import { AppBar as MuiAppBar, Toolbar, Typography, Box } from '@mui/material';
import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';
import useAuth from 'hooks/useAuth';
import { Header } from './AppBarStyles';
import { Link, NavLink } from 'react-router-dom';

function AppBar() {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <MuiAppBar position="static">
        <Toolbar>
          {!isLoggedIn && (
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/">Phonebook</Link>
            </Typography>
          )}
          <Typography variant="h6">
            {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
          </Typography>
          <Box sx={{ marginLeft: 'auto' }}>{isLoggedIn && <UserMenu />}</Box>
        </Toolbar>
      </MuiAppBar>
      <Navigation />
    </Header>
  );
}

export default AppBar;
