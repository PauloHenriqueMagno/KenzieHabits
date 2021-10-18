import * as React from "react";
import { Box } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Modal } from "@material-ui/core";
import { style } from "./styles";
import { theme } from "./styles";
import { ThemeProvider } from "@material-ui/core";
import Inputs from "../Inputs/index";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CancelIcon from "@material-ui/icons/Cancel";

export default function BasicModal({ Data }) {
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
    Data.dataCaptor(data);
    reset();
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Button onClick={handleOpen}>{Data.triggerBtn}</Button>
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
