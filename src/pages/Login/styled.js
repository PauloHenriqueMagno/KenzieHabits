import { styled } from "@material-ui/core";

import backgroundImageLogin from "./background_image_login.png";

export const LoginSection = styled("section")({
    width: "80%",
    margin: "30px auto",
    maxWidth: "500px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "#FFF",
    
    h1: {
        fontFamily: "Saira Stencil One",
        fontWeight: 500,
        fontSize: "4rem",
        color: "#155B9E",
        cursor: "pointer",
        
        span: { color: "#F36A21",
        fontSize: "3.5rem",
        }
    },

    p: {
        fontWeight: 600,
        marginLeft: "auto",
    },

    "@media (min-width: 700px)": {
        boxShadow: "0 0 2px rgba(0,0,0,0.3)",
        borderRadius: "6px",
        padding: "15px 15px 50px",
        marginTop: "30px",
        zIndex: "1",
    },
});

export const BackgroundImage = styled("img")({
    display: "none",

    "@media (min-width: 700px)": {
        display: "block",
        content: `url(${backgroundImageLogin})`,
        position: "fixed",
        top: "0",
        right: "0",
        height: "100vh",
        zIndex: "-1",
    }
});

export const Link = styled("a")({
    color: "#F36A21",
    cursor: "pointer",
});

export const LoginForm = styled("form")({
    width: "100%",
    margin: "15px 0 25px 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "15px",


    p: {
        fontFamily: "Rosario",
        fontWeight: 700,
        fontSize: "1.6rem",
        textAlign: "left",
        width: "100%",
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