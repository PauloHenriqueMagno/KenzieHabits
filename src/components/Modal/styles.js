import { createTheme } from "@material-ui/core";

export const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 400,
      laptop: 550,
      desktop: 700,
    },
  },
});

export const buttonContainer = {
  width:"30px",
  "svg:first-of-type": {
    "pointer-events": "",
    width:"100%",
    ":hover": {
      cursor: "pointer",
    },
  },
};

export const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { mobile: "90vw", desktop: 480 },
  maxWidth: { mobile: 600, desktop: 480 },
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  alignContent: "center",
  bgcolor: "rgb(206, 210, 206)",
  border: "2px solid rgb(124, 126, 124)",
  borderRadius: "8px",
  boxShadow: 24,
  p: "50px 0",
  ".title": {
    padding: "15px",
  },
  ".closeBtn": {
    color: "rgb(228, 148, 102)",
    fontSize: "35px",
    position: "absolute",
    left: "87%",
    top: "4%",
  },
  ".closeBtn:hover": {
    cursor: "pointer",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: { mobile: "85%", desktop: "425" },
    alignSelf: "center",
  },
  ".input": {
    alignSelf: "center",
    margin: "15px",
    bgcolor: "white",
    borderRadius: "4px",
  },
  "label.Mui-focused": {
    color: "black",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "1px solid black",
    },

    "&.Mui-focused fieldset": {
      border: "1px solid black",
    },
  },
  ".button": {
    alignSelf: "center",
    width: { mobile: "60%", desktop: 325 },
    margin: "0 auto",
    bgcolor: "rgb(224, 158, 120)",
    m: "15px",
  },
};
