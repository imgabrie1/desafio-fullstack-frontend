import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import { LoginMain } from "./style";
import iLogin from "../../interfaces/login.interface";
import { loginSchema } from "../../schemas/login.schema";

const Login = () => {
  const { singIn } = useAuth();
  const { register, handleSubmit } = useForm<iLogin>({
    resolver: zodResolver(loginSchema),
  });

  return (
    <LoginMain>
      <div>
        <form onSubmit={handleSubmit(singIn)}>
          <h2>Login</h2>
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" {...register("email")} />
          <label htmlFor="password">Senha</label>
          <input type="password" id="password" {...register("password")} />

          <div className="divButtonsForm">
            <button type="submit">Login</button>

            <p>Não é registrado?</p>
            <Link to={"/register"}>Registrar</Link>
          </div>
        </form>
      </div>
    </LoginMain>
  );
};

export default Login;
