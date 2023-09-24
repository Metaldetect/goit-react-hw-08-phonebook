import { useSelector } from 'react-redux';
import {
  selectEmail,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectIsAuthenticated,
  selectUser,
} from 'redux/auth/selectors';

const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const user = useSelector(selectUser);
  const email = useSelector(selectEmail);

  return {
    isLoggedIn,
    isRefreshing,
    isAuthenticated,
    user,
    email,
  };
};

export default useAuth;
