import { NavLink } from 'react-router-dom';
import { Typography } from '@mui/material';

const AuthNav = () => {
  return (
    <>
      <Typography
        variant="button"
        component={NavLink}
        to="/register"
        sx={{ color: 'primary.main', mr: 2 }}
      >
        Register
      </Typography>
      <Typography
        variant="button"
        component={NavLink}
        to="/login"
        sx={{ color: 'primary.main' }}
      >
        Log In
      </Typography>
    </>
  );
};

export default AuthNav;
