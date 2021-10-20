import { styled } from "@material-ui/core/styles";

export const Container = styled("main")({
  width: "100vw",
});

export const Content = styled("div")({
  backgroundColor: "#F2F2F2",
  maxWidth: "1280px",

  minHeight: "90vh",
  borderRadius: "1%",

  "@media (min-width: 700px)": {
    width: "90%",
    margin: "0 auto",
    padding: "30px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});
