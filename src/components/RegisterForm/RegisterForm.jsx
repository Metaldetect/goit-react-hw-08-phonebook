import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operation';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {} from './RegisterFormStyles';
import Notiflix from 'notiflix';
import {
  ErrorMessageContainer,
  FormContainer,
  Button,
  FormGroup,
  Label,
} from './RegisterFormStyles';

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const successMessage = 'Registred successfully!';
  const errorMessage = 'Registration failed. Please try again.';

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

  const handleSubmit = async ({ values, resetForm }) => {
    try {
      dispatch(
        register({
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
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <FormContainer autoComplete="off">
        {
          <>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" component={ErrorMessageContainer} />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Password</Label>
              <Field type="password" id="password" name="password" />
              <ErrorMessage name="password" component={ErrorMessageContainer} />
            </FormGroup>
            <Button type="submit">Register</Button>
          </>
        }
      </FormContainer>
    </Formik>
  );
};

export default RegistrationForm;
