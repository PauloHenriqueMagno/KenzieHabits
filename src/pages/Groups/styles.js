import {
  styled,
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Button,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  TablePagination,
  Box,
} from "@material-ui/core";

export const Container = styled("main")({
  width: "100vw",
});

export const Content = styled("div")({
  padding: "30px",
  backgroundColor: "#F2F2F2",
  maxWidth: "1280px",
  width: "90%",
  margin: "0 auto",
  minHeight: "90vh",
  borderRadius: "1%",
});

export const StyledPaper = styled(Paper)({
  padding: "30px",
  backgroundColor: "#5D6A5A",
  color: "#FFF",
});

export const StyledBox = styled(Box)({
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "space-between",

  "& .groupsListTitles": {
    minHeight: 53,
    width: "24%",
    display: "flex",
    alignItems: "center",
  },
});

export const StyledTablePagination = styled(TablePagination)({
  color: "#FFF",
  flex: 1,
});

export const AccordionSummaryText = styled(Typography)({
  width: "25%",
  flexShrink: 0,
  fontWeight: "bold",
});

export const StyledAccordion = styled(Accordion)({
  color: "#000",
  backgroundColor: "#fff",
  marginBottom: 10,

  svg: {
    backgroundColor: "#F36A21",
    borderRadius: "100%",
    color: "#FFF",
  },
});

export const StyledAccordionSummary = styled(AccordionSummary)({
  backgroundColor: "#C4C4C4",
  color: "#FFF",
});

export const StyledAccordionDetails = styled(AccordionDetails)({
  color: "#000",
  backgroundColor: "#fff",
});

export const StyledButton = styled(Button)({
  color: "#F36A21",
  fontWeight: "bold",

  ":hover": {
    backgroundColor: "rgba(243, 106, 33, 0.1)",
  },
});
