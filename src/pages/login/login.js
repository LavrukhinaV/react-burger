import { useState } from "react";
import loginStyles from './login.module.css';
import AppHeader from "../../components/app-header/app-header";
import { EmailInput, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import Form from "../../components/form/form";

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
  const [emailInputValue, setEmailInputValue] = useState('');
  const [passwordInputValue, setPasswordInputValue] = useState('')

  const onEmailInputChange = e => {
    setEmailInputValue(e.target.value)
  }

  const onPasswordInputChange = e => {
    setPasswordInputValue(e.target.value)
  }

  return (
    <div className={`${loginStyles.page} text text_type_main-default`}>
      <AppHeader />
      <main className={loginStyles.content}>
        <Form title="Вход" buttonText="Войти" links={links}>
          <EmailInput
            onChange={onEmailInputChange}
            value={emailInputValue}
            name={'email'}
            isIcon={false}
            extraClass="mb-6"
          />
          <PasswordInput
            onChange={onPasswordInputChange}
            value={passwordInputValue}
            name={'password'}
            extraClass="mb-6"
          />
        </Form>
      </main>
    </div>
  );
}

export default Login;