import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operation';
import useAuth from 'hooks/useAuth';
import { Container, Button, Text } from './UserMenuStyles';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Container>
      <Text>Welcome, {user.name}</Text>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </Container>
  );
};

export default UserMenu;
