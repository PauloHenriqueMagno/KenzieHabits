import { useHistory } from "react-router";
import { useEffect } from "react";

const LoadUserData = () => {
    const history = useHistory();
    
    useEffect(()=>{
        
        const user = JSON.parse(localStorage.getItem("khabitz/user"));

        user && history.push("/dashboard");

    },[]);

    return <></>
};

export default LoadUserData;