import * as React from "react";
import { Box } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Modal } from "@material-ui/core";
import { style, edit } from "./styles";
import { theme } from "./styles";
import { ThemeProvider } from "@material-ui/core";
import Inputs from "../Inputs/index";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CancelIcon from "@material-ui/icons/Cancel";
import AddButton from "../AddButton";
import { Edit } from "@material-ui/icons";

export default function BasicModal({
  Data,
  apiAction,
  habitId,
  groupId,
  goalId,
  activityId,
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const modalSchema = yup.object().shape(Data.schema);
  const {
    register,
    handleSubmit,
    reset,
    formState: { error },
  } = useForm({
    resolver: yupResolver(modalSchema),
  });
  const handleButton = (data) => {
    const user = JSON.parse(localStorage.getItem("khabitz/user"));
    apiAction(
      Data.search === "CreateHabit"
        ? { ...Data.dataCaptor(data), user: user.id }
        : Data.search === "UpdateHabit"
        ? (Data.dataCaptor(data), habitId)
        : Data.search === "UpdateUser"
        ? Data.dataCaptor(data)
        : Data.search === "CreateGroup"
        ? Data.dataCaptor(data)
        : Data.search === "UpdateGroup"
        ? (Data.dataCaptor(data), groupId)
        : Data.search === "CreateGoal"
        ? { ...Data.dataCaptor(data), group: groupId }
        : Data.search === "UpdateGoal"
        ? (Data.dataCaptor(data), goalId)
        : Data.search === "CreateActivity"
        ? { ...Data.dataCaptor(data), group: groupId }
        : Data.search === "UpdateActivity"
        ? (Data.dataCaptor(data), activityId )
        : Data.dataCaptor(data)
    );
    if (Data.action === "create") {
      reset();
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <div
          onClick={handleOpen}
          title={Data.triggerBtn}
          style={{ width: "35px" }}
        >
          {Data.action === "create" ? <AddButton /> : <Edit sx={edit} />}
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <CancelIcon className="closeBtn" onClick={handleClose} />
            <Typography
              className="title"
              id="modal-modal-title"
              variant="h6"
              component="h2"
            >
              {Data.title}
            </Typography>
            <form onSubmit={handleSubmit(handleButton)}>
              {Data.label_register.map((item, index) => (
                <Inputs
                  type={item.type}
                  key={index}
                  error={error}
                  register={register}
                  className="input"
                  text={item.text}
                  name={item.name}
                />
              ))}
              <Button type="submit" className="button">
                {Data.concludeBtn}
              </Button>
            </form>
          </Box>
        </Modal>
      </div>
    </ThemeProvider>
  );
}
