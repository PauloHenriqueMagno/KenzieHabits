import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { styled } from "@material-ui/core";

export const StyledCard = styled("div")({
  color: " #F36A21",
});

const AddButton = () => {
  return (
    <div>
      <AddCircleOutlineIcon
        onClick={() => alert("encaminha para o modal ou página")}
        fontSize="large"
      />
    </div>
  );
};

export default AddButton;
