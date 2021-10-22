import { Button, Container, Logo, IconUser, UserName } from "./style.js";
import { useContext } from "react";
import { UserContext } from "../../providers/User/index.js";
import UserPopover from "../popover";

const Header = () => {
  const { user } = useContext(UserContext);

  const path = window.location.pathname;

  return (
    <Container>
      <IconUser>
        <Logo to="/dashboard">
          K<span>HABIT</span>Z
        </Logo>
        <UserName>
          <p>{user.username}</p>
          <UserPopover id="UserIcon" />
        </UserName>
      </IconUser>
      <Button to="/dashboard" select={path === "/dashboard" ? "true" : ""}>
        Meus Habitos
      </Button>
      <Button
        to="/dashboard/groups"
        select={path === "/dashboard/groups" ? "true" : ""}
      >
        Meus Grupos
      </Button>
      <Button to="/groups" select={path === "/groups" ? "true" : ""}>
        Grupos
      </Button>
    </Container>
  );
};

export default Header;
