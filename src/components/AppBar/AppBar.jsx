import * as React from 'react';
import { AppBar as MuiAppBar, Toolbar, Typography } from '@mui/material';
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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/">Phonebook</Link>
            {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
          </Typography>
          {isLoggedIn ? <UserMenu /> : null}
        </Toolbar>
      </MuiAppBar>
      <Navigation />
    </Header>
  );
}

export default AppBar;
