import { useState } from "react";
import loginStyles from './login.module.css';
import AppHeader from "../../components/app-header/app-header";
import { EmailInput, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import Form from "../../components/form/form";
import { signIn } from "../../services/actions/auth";
import { useDispatch } from 'react-redux';

const links = [
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

  const [form, setForm] = useState({
    email: "",
    password: ""
  })

  const changeForm = (e) => {
    const name = e.target.name
    const value = e.target.value

    setForm({
      ...form,
      [name]: value
    })
  }

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(signIn({
      "email": form.email,
      "password": form.password
    }));
  }

  return (
    <div className={`${loginStyles.page} text text_type_main-default`}>
      <AppHeader />
      <main className={loginStyles.content}>
        <Form title="Вход" buttonText="Войти" links={links} onButtonClick={handleLogin}>
          <EmailInput
            onChange={changeForm}
            value={form.email}
            name={'email'}
            isIcon={false}
            extraClass="mb-6"
          />
          <PasswordInput
            onChange={changeForm}
            value={form.password}
            name={'password'}
            extraClass="mb-6"
          />
        </Form>
      </main>
    </div>
  );
}

export default Login;