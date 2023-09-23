import React from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operation';
import * as Yup from 'yup';
import {
  Button,
  Container,
  CssBaseline,
  Avatar,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Box,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email format')
      .required('Email field is required'),
    password: Yup.string().required('Password field is required'),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await dispatch(logIn(values));
      resetForm();
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <Field
              as={TextField}
              variant="outlined"
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <ErrorMessage name="email" component="div" />
            <Field
              as={TextField}
              variant="outlined"
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <ErrorMessage name="password" component="div" />
            <FormControlLabel
              control={<Field as={Checkbox} name="remember" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Form>
        </Formik>
        <Grid container justifyContent="center">
          <Grid item>
            <Link to="/register">Don't have an account? Sign Up</Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default LoginForm;
