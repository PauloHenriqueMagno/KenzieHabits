import { Link } from "react-router-dom";
import { styled } from "@material-ui/core/styles";

export const Logo = styled(Link)({
  display: "none",

  "@media (min-width: 700px)": {
    display: "inline-block",
    fontFamily: "Saira Stencil One",
    fontWeight: 500,
    fontSize: "3rem",
    color: "#155B9E",
    margin: "0 0 40px 10px",

    span: {
      color: "#F36A21",
      fontSize: "2.6rem",
    },
  },
});

export const Container = styled("div")({
  backgroundColor: "#F36A21",
  padding: "20px 10px",
  maxWidth: "1280px",
  margin: "auto",

  "@media (min-width: 700px)": {
    backgroundColor: "#FFF",
    width: "90%",
    padding: "10px 0",
  },
});

export const Button = styled(Link)(({ select }) => ({
  color: "#FFF",
  textDecoration: "none",
  padding: "5px",
  fontSize: "0.9rem",
  filter: `brightness(${select ? `50%` : `100%`})`,

  "@media (min-width: 700px)": {
    backgroundColor: select ? `#728372` : `#5D6A5A`,
    padding: "10px",
    margin: "10px",
    borderRadius: "10px 10px 0 0",
    filter: `brightness(100%)`,
  },
}));

export const IconUser = styled("div")({
  display: "flex",
  justifyContent: "space-between",
});

export const UserName = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "row-reverse",
  width: "max-content",
  margin: "0 0 15px 0",

  p: {
    color: "#FFF",
  },

  div: {
    width: "90px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  svg: {
    width: "100%",
    color: "#FFF",
    fontSize: "40px",
  },

  "@media (min-width: 700px)": {
    flexDirection: "row",
    height: "80px",
    margin: "0 0 0 0",

    p: {
      color: "#1F1F1E",
    },

    svg: {
      fontSize: "56px",
      color: "#555",
      position: "relative",
      margin: "7px 0 0 -19px",
    },
  },
});
