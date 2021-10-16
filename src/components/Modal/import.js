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
import { AiFillCloseCircle } from "react-icons/ai";

export default function BasicModal({ modalType }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const createHabitSchema = yup.object().shape({
    title: yup.string().required(),
    category: yup.string().required(),
    difficulty: yup.string().required(),
    frequency: yup.string().required(),
    how_much_achieved: yup.number().required(),
  });

  const updateUserNameSchema = yup.object().shape({
    username: yup.string().required(),
  });

  const createGroupSchema = yup.object().shape({
    name: yup.string().required(),
    description: yup.string().required(),
    category: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { error },
  } = useForm({
    resolver: yupResolver(
      createHabitSchema,
      updateUserNameSchema,
      createGroupSchema
    ),
  });
  const handleButton = (data) => {
    console.log(data);
  };

  return modalType === "createHabit" ? (
    <ThemeProvider theme={theme}>
      <Button onClick={handleOpen}>Criar hábito</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AiFillCloseCircle className="closeBtn" onClick={handleClose} />
          <Typography
            className="title"
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Escreva mais sobre seu novo hábito
          </Typography>
          <form onSubmit={handleSubmit(handleButton)}>
            <Inputs
              error={error}
              register={register}
              className="input"
              text="título"
              name="title"
            />
            <Inputs
              error={error}
              register={register}
              className="input"
              text="categoria"
              name="category"
            />
            <Inputs
              error={error}
              register={register}
              className="input"
              text="dificuldade"
              name="difficulty"
            />
            <Inputs
              error={error}
              register={register}
              className="input"
              text="frequência"
              name="frequency"
            />
            <Inputs
              error={error}
              register={register}
              className="input"
              text="quanto já foi concluído"
              name="how_much_achieved"
            />
            <Button type="submit" className="button">
              Criar hábito
            </Button>
          </form>
        </Box>
      </Modal>
    </ThemeProvider>
  ) : modalType === "EditUserName" ? (
    <ThemeProvider theme={theme}>
      <Button onClick={handleOpen}>Editar nome de usuário</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AiFillCloseCircle className="closeBtn" onClick={handleClose} />
          <Typography
            className="title"
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Altere aqui seus dados
          </Typography>
          <form onSubmit={handleSubmit(handleButton)}>
            <Inputs
              error={error}
              register={register}
              className="input"
              text="Nome de usuário"
              name="username"
            />
            <Button type="submit" className="button">
              Editar
            </Button>
          </form>
        </Box>
      </Modal>
    </ThemeProvider>
  ) : modalType === "CreateGroup" ? (
    <ThemeProvider theme={theme}>
      <Button onClick={handleOpen}>Criar grupo</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AiFillCloseCircle className="closeBtn" onClick={handleClose} />
          <Typography
            className="title"
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Escreva mais sobre seu novo grupo
          </Typography>
          <form onSubmit={handleSubmit(handleButton)}>
            <Inputs
              error={error}
              register={register}
              className="input"
              text="título do grupo"
              name="name"
            />
            <Inputs
              error={error}
              register={register}
              className="input"
              text="categoria"
              name="description"
            />
            <Inputs
              error={error}
              register={register}
              className="input"
              text="descrição"
              name="category"
            />
            <Button type="submit" className="button">
              Criar grupo
            </Button>
          </form>
        </Box>
      </Modal>
    </ThemeProvider>
  ) : null;
}
