import { styled } from "@material-ui/core";

export const LoginSection = styled("section")({
    width: "80%",
    margin: "auto",
    maxWidth: "500px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    h1: {
        fontFamily: "Saira Stencil One",
        fontWeight: 500,
        fontSize: "4rem",
        color: "#155B9E",

        span: { color: "#F36A21",
            fontSize: "3.5rem",
        }
    },

    p: {
        fontWeight: 600,
        marginLeft: "auto",
    },

    "@media (min-width: 769px)": {
        border: "1px solid rgba(100,100,100, 0.5)",
        boxShadow: "0 0 2px rgba(0,0,0,0.2)",
        borderRadius: "6px",
        padding: "15px 15px 50px",
        marginTop: "30px",
    }
});

export const Link = styled("a")({
    color: "#F36A21",
});

export const LoginForm = styled("form")({
    width: "100%",
    margin: "15px 0 25px 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "15px",

    h3: {
        fontFamily: "Rosario",
        margin: "15px 0 35px 0",
    },

    button: {
        width: "80%",
        margin: "25px auto",
        padding: "5px 20px",
        borderRadius: "5px",
        background: "#F36A21",
        cursor: "pointer",
        border: "none",
        fontSize: "1.4rem",
        color: "rgb(255,255,255)",
    },
});