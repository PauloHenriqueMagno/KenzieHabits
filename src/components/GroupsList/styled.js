import { 
    Card, 
    styled,
} from "@material-ui/core";

export const StyledCardGroup = styled(Card)({
    boxShadow: "inset 0 0 1em rgba(0, 0, 0, 0.2)",
    textTransform: "none",
    fontSize: 16,
    padding: "12px",
    border: "1px solid",
    lineHeight: 1.5,
    backgroundColor: "#5D6A5A",
    borderColor: "#000000",
    color: " #ffffff",
    minWidth: "100%",
    
    "@media (min-width: 700px)": {
        display: "grid",
        gridTemplateColumns: "40% 59%",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 25px",
        gap: "10px",

        div: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
        },

        span: {
            display: "none",
        },
    },
});

export const List = styled("ul")({
    display: "grid",
    width: "100%",
    gap: "5px",
    listStyle: "none",
});

export const TitleDescription = styled("div")({
    display: "none",
    
    "@media (min-width: 700px)":{
        display: "grid",
        gridTemplateColumns: "40% 59%",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 25px",
        gap: "10px",
        
        div: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
        },
    },
});