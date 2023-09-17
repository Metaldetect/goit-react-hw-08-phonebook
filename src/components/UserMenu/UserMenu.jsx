import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operation';
import useAuth from 'hooks/useAuth';
import defaultAvatar from './default-avatar.png';
import { Container, Button, Text, Avatar } from './UserMenuStyles';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const avatar = defaultAvatar;

  return (
    <Container>
      <Avatar src={avatar} alt="avatar" />
      <Text>Welcome, {user.name}</Text>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </Container>
  );
};

export default UserMenu;
