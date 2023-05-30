import loginStyles from './login.module.css';
import { EmailInput, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import Form from "../../components/form/form";
import { signIn } from "../../services/actions/auth";
import { useDispatch } from 'react-redux';
import { useForm } from "../../hooks/useForm";
import { FormEvent } from 'react';
import { TLink } from '../../utils/types';

const links: Array<TLink> = [
  {
    title: "Вы — новый пользователь?",
    linkName: "Зарегистрироваться",
    path: "/register",
  },
  {
    title: "Забыли пароль?",
    linkName: "Восстановить пароль",
    path: "/forgot-password",
  }
];

function Login() {
  const dispatch = useDispatch();

  const { values, handleChange } = useForm({
    email: "",
    password: ""
  });

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
     //@ts-ignore
    dispatch(signIn({
      "email": values.email,
      "password": values.password
    }));
  }

  return (
    <main className={loginStyles.content}>
      <Form title="Вход" buttonText="Войти" links={links} onFormSubmit={handleLogin}>
        <EmailInput
          onChange={handleChange}
          value={values.email}
          name={'email'}
          isIcon={false}
          extraClass="mb-6"
        />
        <PasswordInput
          onChange={handleChange}
          value={values.password}
          name={'password'}
          extraClass="mb-6"
        />
      </Form>
    </main>
  );
}

export default Login;