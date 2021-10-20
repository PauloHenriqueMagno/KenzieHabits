import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { styled } from "@material-ui/core";

const StyledAddButton = styled("div")({
  color: " #F36A21",
});

const AddButton = () => {
  return (
    <StyledAddButton>
      <AddCircleOutlineIcon fontSize="large" />
    </StyledAddButton>
  );
};

export default AddButton;
