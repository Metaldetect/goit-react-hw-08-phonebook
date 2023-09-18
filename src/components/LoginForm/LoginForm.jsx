import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operation';
import * as Yup from 'yup';
import {
  Button,
  ErrorMessageContainer,
  FormGroup,
  Label,
} from './LoginFormStyles';
import { ErrorMessage, Field, Formik, Form } from 'formik';

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
    dispatch(logIn(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
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
        <Button type="submit">Log In</Button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
