import { Paper } from "@material-ui/core";
import { Container } from "./styles";
import Inputs from "../../components/Inputs";
import { useHistory } from "react-router-dom";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Signup = () => {
  const history = useHistory();
  const formSchema = yup.object().shape({
    username: yup.string().required("Este campo é obrigatório"),
    email: yup
      .string()
      .required("Este campo é obrigatório")
      .email("Digite um email válido"),
    password: yup.string().required("Este campo é obrigatório"),
    passwordConfirm: yup
      .string()
      .required("Este campo é obrigatório")
      .oneOf([yup.ref("password")], "as senhas não conferem"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const formSubmit = (data) => {
    console.log(data);
  };
  return (
    <Container>
      <Paper
        sx={{ maxWidth: "400px", padding: "40px 30px", margin: "25px auto" }}
      >
        <div>
          <h1>Khabitz</h1>
          <p>Inscreva-se gratuitamente</p>
        </div>
        <form onSubmit={handleSubmit(formSubmit)}>
          <Inputs
            text="Username"
            register={register}
            name="username"
            error={errors.username?.message}
          />
          <Inputs
            text="Email"
            register={register}
            name="email"
            error={errors.email?.message}
          />
          <Inputs
            text="Password"
            register={register}
            name="password"
            error={errors.password?.message}
          />
          <Inputs
            text="Confirm password"
            register={register}
            name="passwordConfirm"
            error={errors.passwordConfirm?.message}
          />
          <button type="submit">Inscrever-se</button>
        </form>
        <div>
          <p>
            Já está inscrito?{" "}
            <button onClick={() => history.push("/login")}>
              Realizar login
            </button>
          </p>
        </div>
      </Paper>
    </Container>
  );
};

export default Signup;
