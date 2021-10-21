import { useHistory } from "react-router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const LoadUserData = () => {
    const history = useHistory();
    
    const [path, setPath] = useState(window.location.pathname);

    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem("khabitz/user"));

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
    },[path]);

    return <></>;
};

export default LoadUserData;