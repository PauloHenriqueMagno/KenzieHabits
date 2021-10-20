import Inputs from "../../components/Inputs";
import { LoginSection, LoginForm, Link, BackgroundImage } from "./styled";

import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import jwt_decode from "jwt-decode";

import { UserContext } from "../../providers/User";
import { useContext } from "react";

const Login = () => {
  const history = useHistory();
  const { addUser } = useContext(UserContext);

  const schema = yup.object().shape({
    username: yup.string().required("Insira seu nome de usuário"),
    password: yup.string().required("Insira sua senha"),
  });

  const submitForm = (data) => {
    api
      .post("/sessions/", data)
      .then((response) => {
        const id = jwt_decode(response.data.access).user_id;
        const access = response.data.access;

        api.get(`/users/${id}/`).then((response) => {
          addUser({ ...response.data, access });
          history.push("/dashboard");
          toast.info(`Bem vindo, ${response.data.username}`);
        });
      })
      .catch((err) => toast.error("Dados incorretos"));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <>
      <LoginSection>
        <h1 onClick={() => history.push("/")}>
          K<span>HABIT</span>Z
        </h1>
        <LoginForm onSubmit={handleSubmit(submitForm)}>
          <p>Faça seu login</p>
          <Inputs
            text={"Nome de usuário"}
            register={register}
            name="username"
            error={errors.username?.message}
          />
          <Inputs
            text={"Senha"}
            register={register}
            name="password"
            error={errors.password?.message}
            type="password"
          />
          <button>Entrar</button>
        </LoginForm>
        <p>
          Ainda não está inscrito?{" "}
          <Link onClick={() => history.push("/signup")}>Inscrever-se</Link>
        </p>
      </LoginSection>
      <BackgroundImage alt="background_image" />
    </>
  );
};

export default Login;
