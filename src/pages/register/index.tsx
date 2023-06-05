import { SubmitHandler, useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterMain } from "./style";
import { Link } from "react-router-dom";
import iRegister from "../../interfaces/register.interface";
import registerSchema from "../../schemas/register.schema";

export interface iRegisterFormValues {
  name: string;
  email: string;
  phone: string;
  password: string;
}

const Register = () => {
  const { formRegister } = useAuth();
  const { register, handleSubmit } = useForm<iRegister>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit: SubmitHandler<iRegisterFormValues> = async (formData) => {
    formRegister(formData);
  };

  return (
    <RegisterMain>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Cadastro</h2>
        <label htmlFor="name">Nome</label>
        <input type="text" id="name" {...register("name")} />

        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" {...register("email")} />

        <label htmlFor="phone">Telefone</label>
        <input type="text" id="phone" {...register("phone")} />

        <label htmlFor="password">Senha</label>
        <input type="password" id="password" {...register("password")} />

        <button type="submit">Cadastrar</button>

        <div>
          <p>Você já tem uma conta?</p>
          <Link to={"/"}>Faça login</Link>
        </div>
      </form>
    </RegisterMain>
  );
};

export default Register;
