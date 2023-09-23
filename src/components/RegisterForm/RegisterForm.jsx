import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operation';
import { Formik, Field, ErrorMessage, Form } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import Notiflix from 'notiflix';
import {
  Button,
  Grid,
  TextField,
  Avatar,
  Typography,
  Box,
  Container,
  CssBaseline,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const successMessage = 'Registered successfully!';
  const errorMessage = 'Registration failed. Please try again.';

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name field is required'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Email field is required'),
    password: Yup.string().required('Password field is required'),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      dispatch(
        register({
          name: values.name,
          email: values.email,
          password: values.password,
        })
      );
      Notiflix.Notify.success(successMessage);
      resetForm();
    } catch (error) {
      Notiflix.Notify.failure(errorMessage);
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
          Sign up
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <Field
              as={TextField}
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
            />
            <ErrorMessage name="name" component="div" />
            <Field
              as={TextField}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
            <ErrorMessage name="email" component="div" />
            <Field
              as={TextField}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
            />
            <ErrorMessage name="password" component="div" />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          </Form>
        </Formik>
        <Grid container justifyContent="center">
          <Grid item>
            <Link to="/login">Already have an account? Sign in</Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default RegistrationForm;
