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
  width: "100%",
  display: "flex",
  flexDirection: "column",
  ".titleContainer": {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  ".activityContainer": {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#C4C4C4",
    margin: "5px 0",
    padding: "10px 30px",
  },

  ".activityContent": {
    width: "50%",
    display: "flex",
    justifyContent: "space-between",
  },

  ".activityActions": {
    width: "30%",
    display: "flex",
    justifyContent: "flex-end",
  },
  svg: {
    backgroundColor: "#F36A21",
    borderRadius: "100%",
    padding: "5px",
    cursor: "pointer",
    marginLeft: "20px",
  },
};
