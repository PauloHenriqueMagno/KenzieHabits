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
  backgroundColor: "#F2F2F2",
  maxWidth: "1280px",

  minHeight: "90vh",
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

  "@media (min-width: 700px)": {
    marginTop: "none",
  },
});

export const StyledBox = styled(Box)({
  display: "flex",
  flexWrap: "wrap-reverse",
  alignItems: "flex-end",
  justifyContent: "flex-start",

  "& .groupsListTitles": {
    fontSize: "0.8em",
    minHeight: 53,
    width: "29%",
    display: "flex",
    alignItems: "center",
  },
  "@media (min-width: 700px)": {
    justifyContent: "space-between",

    "& .groupsListTitles": {
      fontSize: "1em",
      minHeight: 53,
      width: "24%",
    },
  },
});

export const StyledTablePagination = styled(TablePagination)({
  color: "#FFF",
  marginLeft: "auto",

  "@media (min-width: 700px)": {
    flex: 1,
  },
});

export const AccordionSummaryText = styled(Typography)({
  width: "33%",
  wordWrap: "break-word",
  flexShrink: 0,
  fontSize: "0.8em",
  fontWeight: "bold",

  "@media (min-width: 700px)": {
    width: "25%",
    fontSize: "1em",
  },
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
  fontSize: "0.8em",
  display: "flex",
  flexDirection: "column",

  "& div": {
    padding: "5px",
  },

  "& .goalsList": {
    borderTop: "1px solid #C4C4C4",
    borderBottom: "1px solid #C4C4C4",
  },

  "@media (min-width: 700px)": {
    fontSize: "1em",
    flexDirection: "row",
    justifyContent: "space-between",

    "& .goalsList": {
      borderTop: "none",
      borderBottom: "none",
      borderRight: "1px solid #C4C4C4",
      borderLeft: "1px solid #C4C4C4",
    },
  },
});

export const StyledButton = styled(Button)({
  color: "#F36A21",
  fontWeight: "bold",

  ":hover": {
    backgroundColor: "rgba(243, 106, 33, 0.1)",
  },
});
