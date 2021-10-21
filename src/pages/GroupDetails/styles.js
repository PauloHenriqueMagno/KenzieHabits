import { styled, Paper } from "@material-ui/core";

export const Container = styled("main")({
  width: "100vw",
});

export const Content = styled("div")({
  backgroundColor: "#F2F2F2",
  maxWidth: "1280px",

  minHeight: "70vh",
  borderRadius: "1%",

  "@media (min-width: 700px)": {
    width: "90%",
    margin: "0 auto",
    padding: "30px",
  },
});

export const StyledPaper = styled(Paper)({
  padding: "30px",
  backgroundColor: "#5D6A5A",
  color: "#FFF",
  marginTop: "25px",

  "& .actionsHeader": {
    display: "flex",
    alignItems: "center",
  },

  "& .goalsContent": {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },

  "@media (min-width: 700px)": {
    marginTop: "none",
  },
});
