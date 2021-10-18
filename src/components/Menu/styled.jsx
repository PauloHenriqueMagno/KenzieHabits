import { styled } from "@material-ui/core"

export const HeaderMenu = styled("header")({
    width: "100%",
    
    ".container": {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        maxWidth: "1300px",
        padding: "5px 15px",
        margin: "auto",
        
        h1: {
            fontFamily: "Saira Stencil One",
            fontWeight: 500,
            fontSize: "3rem",
            color: "#155B9E",
    
            span: {
                color: "#F36A21",
                fontSize: "2.6rem",
            }
        },

        nav: {
            button: {
                border: "none",
                backgroundColor: "transparent",
                color: "#5D6A5A",
                fontFamily: "Rosario",
                fontSize: "1rem",
                cursor: "pointer",
            }
        }
    },

    "@media (min-width: 769px)" : {

        ".container": {
            flexDirection: "row-reverse",

            "nav":{
                marginRight: "35px",

                "button": {
                    margin: "0 10px",
                }
            },
        }
        
    },
});




