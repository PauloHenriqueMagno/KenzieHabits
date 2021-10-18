import { Container, SubmitButton, Input, StyledPaper } from "./styles";
import { useHistory } from "react-router-dom";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import api from "../../services/api";

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

  const redirectUser = (msg) => {
    history.push("/login");
    console.log(msg);
  };

  const formSubmit = (data) => {
    api
      .post("/users/", {
        username: data.username,
        email: data.email,
        password: data.password,
      })
      .then((response) => redirectUser(response))
      .catch((err) => console.log(err));
  };
  return (
    <Container>
      <StyledPaper>
        <div>
          <h1>
            K<span>habit</span>z
          </h1>
          <p>Inscreva-se gratuitamente</p>
        </div>
        <form onSubmit={handleSubmit(formSubmit)}>
          <Input
            text="Username"
            register={register}
            name="username"
            error={errors.username?.message}
          />
          <Input
            text="Email"
            register={register}
            name="email"
            error={errors.email?.message}
          />
          <Input
            text="Password"
            register={register}
            name="password"
            error={errors.password?.message}
            type="password"
          />
          <Input
            text="Confirm password"
            register={register}
            name="passwordConfirm"
            error={errors.passwordConfirm?.message}
            type="password"
          />
          <SubmitButton type="submit">Inscrever-se</SubmitButton>
        </form>
        <div className="redirect">
          <p>
            Já está inscrito?{" "}
            <button
              className="simpleLink"
              onClick={() => history.push("/login")}
            >
              Realizar login
            </button>
          </p>
        </div>
      </StyledPaper>
    </Container>
  );
};

export default Signup;
