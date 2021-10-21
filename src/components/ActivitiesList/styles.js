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

export const container = {
  width: "95%",
  display: "flex",
  flexDirection: "column",
  padding: "0 5px",
  border: "1px solid black",
  margin: "0 auto",
  borderRadius: "8px",
  backgroundColor: "#758073",
  ".titleContainer": {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  ".activityContainer": {
    display: "flex",
    fexlDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#C4C4C4",
    margin:"5px 0"
  },
};
