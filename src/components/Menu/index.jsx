import { HeaderMenu } from "./styled.js";
import { useHistory } from "react-router";

const Menu = () => {
    const history = useHistory()

    return (
        <HeaderMenu>
            <div className="container">
                <h1>K<span>HABIT</span>Z</h1>

                <nav>
                    <button onClick={()=> history.push("/signup")}>Inscreva-se</button>
                    <button onClick={()=> history.push("/login")}>Login</button>
                </nav>
                
            </div>
        </HeaderMenu>
    );
};

export default Menu;