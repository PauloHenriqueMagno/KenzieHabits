import { Button, Paper, styled } from "@material-ui/core";
import Inputs from "../../components/Inputs";

export const Container = styled("main")({
  textAlign: "center",
  h1: {
    fontFamily: "Saira Stencil One",
    fontWeight: 500,
    fontSize: "3rem",
    color: "#155B9E",
    textTransform: "uppercase",

    span: {
      color: "#F36A21",
      fontSize: "2.6rem",
    },
  },

  "& .simpleLink": {
    width: "unset",
    background: "none",
    border: "none",
    fontSize: "1em",
    color: "#F36A21",
    padding: "unset",
    fontWeight: "bold",
    cursor: "pointer",
  },

  "& .redirect": {
    textAlign: "right",
  },
});

export const SubmitButton = styled(Button)({
  backgroundColor: "#F36A21",
  color: "#FFF",
  fontWeight: "bold",
  width: "100%",
  fontSize: "1.2em",
  margin: "15px 0",

  ":hover": {
    backgroundColor: "#F36A21",
  },
});

export const Input = styled(Inputs)({
  margin: "15px 0",
});

export const StyledPaper = styled(Paper)({
  maxWidth: "400px",
  padding: "40px 30px",
  margin: "25px auto",

  "@media (max-width: 420px)": {
    boxShadow: "none",
  },
});
