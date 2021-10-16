import {Button, Container} from './style.js';

const Header = () => {
  return (
    <Container>
      <Button to='/dashboard' >Meus Abitos</Button>
      <Button to='/dashboard/groups' >Meus Grupos</Button>
      <Button to='/groups' >Grupos</Button>
    </Container>
  )
}

export default Header;
