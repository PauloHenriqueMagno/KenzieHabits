import * as React from "react";
import { Popover } from "@material-ui/core";
import { Button } from "@material-ui/core";
import Modal from "../Modal/index";
import { Box } from "@material-ui/system";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { IconButton } from "@material-ui/core";
import { useHistory } from "react-router";
import { buttonContainer } from "./styles";

export default function UserPopover() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const history = useHistory();

  return (
    <div>
      <IconButton
        title="Informações do usuário"
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
      >
        <AccountCircleIcon>Open Popover</AccountCircleIcon>
      </IconButton>
      <Popover
        style={{ marginRight: "20px" }}
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "center",
          horizontal: "left",
        }}
      >
        <Box sx={buttonContainer}>
          <div>
            <Modal modalType="UpdateUserName" />
            <Button
              onClick={() => {
                history.push("/");
                JSON.parse(localStorage.removeItem("khabitz/user"));
              }}
            >
              Sair do usuário
            </Button>
          </div>
        </Box>
      </Popover>
    </div>
  );
}
