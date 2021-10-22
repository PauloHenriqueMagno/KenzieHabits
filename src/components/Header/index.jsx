import { Button, Container, Logo, IconUser, UserName } from "./style.js";
import { IconButton } from "@material-ui/core";
import UserPopover from "../popover/index.js";

const Header = () => {
  const user = JSON.parse(localStorage.getItem("khabitz/user"));

  const path = window.location.pathname;

  return (
    <Container>
      <IconUser>
        <Logo to="/dashboard">
          K<span>HABIT</span>Z
        </Logo>
        <UserName>
          <p>{user.username}</p>
          <UserPopover id="UserIcon"/>
        </UserName>
      </IconUser>
      <Button to='/dashboard' select={path==="/dashboard" ? 'true' : ''} >Meus Habitos</Button>
      <Button to='/dashboard/groups' select={path==="/dashboard/groups" ? 'true' : ''} >Meus Grupos</Button>
      <Button to='/groups' select={path==="/groups" ? 'true' : ''} >Grupos</Button>
    </Container>
  );
};

export default Header;
