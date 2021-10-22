import {
  Button,
  Container,
  Logo,
  IconUser,
} from './style.js';
import UserPopover from '../popover/index.js';

const Header = () => {
  return (
    <Container>
      <IconUser>
        <Logo to='/dashboard' >K<span>HABIT</span>Z</Logo>
        <UserPopover/>
      </IconUser>
      <Button to='/dashboard' >Meus Habitos</Button>
      <Button to='/dashboard/groups' >Meus Grupos</Button>
      <Button to='/groups' >Grupos</Button>
    </Container>
  )
};

export default Header;
