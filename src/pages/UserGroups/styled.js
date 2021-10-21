import { 
    styled,
} from "@material-ui/core";

export const OpenModalCreateGroup = styled("div")({
    div: {
        position: "fixed",
        bottom: "10px",
        right: "20px",
    },
    
    "@media (min-width: 700px)": {
        display: "flex",
        width: "100%",
        padding: "15px 0 0 0",
        marginTop: "auto",
        justifyContent: "flex-end",
        
        div: {
            position: "initial",
            width: "min-content",
        }
    }
});

export const GroupBox = styled("section")({
    padding: "20px 0 10px 0",
    
    "@media (min-width: 700px)": {
        border: "1px solid #1F1F1E",
        borderWidth: "1px 0 0 0",

        "&:first-child": {
            borderWidth: "0 0 0 0",
        },
    },
});

export const Container = styled("div")({
    display: "relative",
    backgroundColor: "none",
    padding: "20px",
    width: "100%",
    maxWidth: "1280px",
    minHeight: "60vh",
    margin: "0 auto 20px",
    borderRadius: "8px",
    gap: "15px",
    
    h3: {
        padding: "0 0 15px 0",
    },

    "@media (min-width: 700px)": {
        backgroundColor: "#F2F2F2",
        display: "flex",
        flexDirection: "column",
    },
});