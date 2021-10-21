import BackgroundImage from "./background_image.png";
import { styled } from "@material-ui/core"; 

export const HomeSection = styled("main")({
    width: "100%",
    
    img: {
        height: "103vh",
        position: "fixed",
        top: "-8px",
        left: "0",
        transform: "translateX(-5.5%)",
        display: "block",
        content: `url(${BackgroundImage})`,
        zIndex: "-1",
        opacity: "0.4",
    },

    ".container": {
        width: "100%",
        maxWidth: "1280px",
        minHeight: "80vh",
        margin: "auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },

    ".content": {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        margin: "auto",
        gap: "35px",
        
        p: {
            maxWidth: "300px",
            fontFamily: "Rosario",
            fontSize: "2rem",
            fontWeight: "700",
            textAlign: "center",
        },

        button: {
            margin: "auto",
            padding: "5px 20px",
            borderRadius: "5px",
            background: "#F36A21",
            cursor: "pointer",
            border: "none",
            fontSize: "1.4rem",
            color: "rgb(255,255,255)",
        },
    },
        
    "@media (min-width: 700px)": {
        img: {
            transform: "translateX(0%)",
            opacity: "1",
            animation: `effectBackground 1000ms`,
        },
        ".content": {
            margin: "10% 20% 0 auto",

            p: {
                fontSize: "2.4rem",
                maxWidth: "450px",
            },
        }
    },

    '@keyframes effectBackground': {
        '0%': {
            opacity: 0.5,
            transform: "translateX(-5.5%)",
        },
        '100%': {
            opacity: 1,
            transform: "translateX(0%)",
        },
    },
});