import * as React from 'react';
import { AppBar as MuiAppBar, Toolbar, Typography, Box } from '@mui/material';
import UserMenu from 'components/UserMenu';
import useAuth from 'hooks/useAuth';

import { Link, NavLink } from 'react-router-dom';

function AppBar() {
  const { isLoggedIn } = useAuth();

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
        <Box sx={{ marginLeft: 'auto' }}>{isLoggedIn && <UserMenu />}</Box>
      </Toolbar>
    </MuiAppBar>
  );
}

export default AppBar;
