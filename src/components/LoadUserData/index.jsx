import { useHistory } from "react-router";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { UserContext } from "../../providers/User/index.js";

const LoadUserData = () => {
    const history = useHistory();
    const { addUser } = useContext(UserContext);
    
    const [path] = useState(window.location.pathname);
    
    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem("khabitz/user"));
        addUser(user);

        switch(path){
            case "/":
                user && history.push("/dashboard");
                break;
            case "/login":
                user && history.push("/dashboard");
                break;
            case "/signup":
                user && history.push("/dashboard");
                break;
            default:
                if(user===null){
                    toast.info("Você não está em uma conta!")
                    history.push("/");
                };
                break;
        };
    },[path, history]);

    return <></>;
};

export default LoadUserData;
