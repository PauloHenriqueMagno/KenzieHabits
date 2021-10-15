import Inputs from "../../components/Inputs"
import { LoginSection, LoginForm, Link } from "./styled";
import { useHistory } from "react-router-dom"

const Login = () =>{
    const history = useHistory()

    

    return (
        <LoginSection>
            <h1 onClick={()=>history.push("/")}>
                K<span>HABIT</span>Z
            </h1>
            <LoginForm>
                <h3>Faça seu login</h3>
                <Inputs text={"E-mail"}/>
                <Inputs text={"Senha"}/>
                <button>
                    Entrar
                </button>
            </LoginForm>
            <p>
                Ainda não está inscrito?&nbsp;

                <Link onClick={()=>history.push("/signup")}>
                    Inscrever-se
                </Link>
            </p>
         </LoginSection>
    )
}

export default Login;