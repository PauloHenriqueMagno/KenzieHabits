import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

const AddButton = () => {
  return (
    <>
      <AddCircleOutlineIcon
        onClick={() => alert("encaminha para o modal ou página")}
        fontSize="large"
      />
    </>
  );
};

export default AddButton;
