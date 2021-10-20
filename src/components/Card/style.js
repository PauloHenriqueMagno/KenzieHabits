import { Card, styled } from "@material-ui/core";
import LinearProgress, {
  linearProgressClasses,
} from "@material-ui/core/LinearProgress";

export const StyledCard = styled(Card)({
  boxShadow: "inset 0 0 1em rgba(0, 0, 0, 0.2)",
  textTransform: "none",
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "#5D6A5A",
  borderColor: "#000000",
  color: " #ffffff",
  fontSize: 14,
  maxHeight: 220,
  minWidth: 350,
  margin: 5,
  span: {
    color: " #F36A21",
    fontSize: "14px",
  },
  "@media (min-width: 700px)": {
    height: 320,
    maxWidth: 350,
    fontSize: 16,
  },
});

export const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  maxWidth: 250,
  height: 18,
  borderRadius: 30,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 30,
    backgroundColor: theme.palette.mode === "light" ? "#F36A21" : "#F36A21",
  },
  "@media (min-width: 700px)": {
    height: 25,
    borderRadius: 30,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 30,
      backgroundColor: theme.palette.mode === "light" ? "#F36A21" : "#F36A21",
    },
  },
}));
