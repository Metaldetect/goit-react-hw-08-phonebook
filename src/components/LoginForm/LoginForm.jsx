import { useDispatch } from 'react-redux';
import Login from 'pages/LoginPage';
import * as Yup from 'yup';
import { Button, FormContainer, FormGroup, Label } from './LoginFormStyles';
import { ErrorMessage, Field, Formik } from 'formik';

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
  const handleSubmit = (values, { resetForm }) => {
    dispatch(Login(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <FormContainer autoComplete="off">
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" component="div" className="error" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Field type="password" id="password" name="password" />
          <ErrorMessage name="password" component="div" className="error" />
        </FormGroup>
        <Button type="submit">Log In</Button>
      </FormContainer>
    </Formik>
  );
};

export default LoginForm;
