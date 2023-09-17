import { Helmet, HelmetProvider } from 'react-helmet-async';
import RegisterForm from 'components/RegisterForm';

function Register() {
  return (
    <HelmetProvider>
      <>
        <Helmet>
          <title>Registration</title>
        </Helmet>
        <RegisterForm />
      </>
    </HelmetProvider>
  );
}

export default Register;
