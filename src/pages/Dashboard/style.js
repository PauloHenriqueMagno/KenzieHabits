import { styled } from "@material-ui/core/styles";

export const Container = styled("main")({
  Maxwidth: "100vw",
});

export const Content = styled("div")({
  backgroundColor: "#F2F2F2",
  maxWidth: "1280px",

  minHeight: "90vh",
  borderRadius: "1%",

  ".addGroup": {
    marginTop: "30px",
    marginBottom: "15px",
    paddingRight: "20px",
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
  },

  "@media (min-width: 700px)": {
    width: "90%",
    margin: "0 auto",
    padding: "30px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});
