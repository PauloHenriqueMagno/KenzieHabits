import { Card, styled } from "@material-ui/core";
import LinearProgress, {
  linearProgressClasses,
} from "@material-ui/core/LinearProgress";

export const StyledCard = styled(Card)({
  boxShadow: "inset 0 0 1em rgba(0, 0, 0, 0.2)",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "#5D6A5A",
  borderColor: "#000000",
  color: " #ffffff",
  maxWidth: "300px",

  span: {
    color: " #F36A21",
  },
});

export const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
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
}));
