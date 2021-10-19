import * as React from "react";
import { Box } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Modal } from "@material-ui/core";
import { style, ButtonTrigger } from "./styles";
import { theme } from "./styles";
import { ThemeProvider } from "@material-ui/core";
import Inputs from "../Inputs/index";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CancelIcon from "@material-ui/icons/Cancel";
import AddCircleIcon from "@material-ui/icons/AddCircle";
// import AddButton from "../AddButton";

export default function BasicModal({ Data, apiAction }) {
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
    console.log(Data.dataCaptor(data));
    apiAction(Data.dataCaptor(data));
    console.log(apiAction);
    reset();
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <span title={`${Data.triggerBtn}`}>
          <AddCircleIcon
            // <AddButton
            sx={ButtonTrigger}
            onClick={handleOpen}
          />
        </span>
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
                  type={
                    (Data.search === "CreateActivity") & (index === 1)
                      ? "datetime-local"
                      : (Data.search === "UpdateActivity") & (index === 1)
                      ? "datetime-local"
                      : null
                  }
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
