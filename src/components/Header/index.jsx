import {Button, Container, Logo} from './style.js';
import Modal from '../Modal';

const Header = () => {
  return (
    <Container>
      <div>
        <Logo to='/dashboard' >K<span>HABIT</span>Z</Logo>
        <Modal modalType="UpdateUserName" />
      </div>
      <Button to='/dashboard' >Meus Habitos</Button>
      <Button to='/dashboard/groups' >Meus Grupos</Button>
      <Button to='/groups' >Grupos</Button>
    </Container>
  )
};

export default Header;
