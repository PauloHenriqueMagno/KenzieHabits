import { styled } from "@material-ui/core/styles";

export const Container = styled("div")({
  backgroundColor: "#F2F2F2",
  padding: "10px 0",

  "@media (min-width: 700px)": {
    backgroundColor: "#F2F2F2",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});
