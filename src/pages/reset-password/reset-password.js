import resetPasswordStyles from './reset-password.module.css';
import AppHeader from "../../components/app-header/app-header";
import Form from "../../components/form/form";
import { PasswordInput, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from "react";
import { useAuth } from "../../utils/Auth";

const links = [
  {
    title: "Вспомнили пароль?",
    linkName: "Войти",
    path: "/login",
  },
];

function ResetPassword() {
  let auth = useAuth();

  const [passwordInputValue, setPasswordInputValue] = useState( "")
  const [tokenInputValue, setTokenInputValue] = useState("")

  const onPasswordInputChange = e => {
    setPasswordInputValue(e.target.value)
  }

  const onTokenInputChange = e => {
    setTokenInputValue(e.target.value)
  }

  const handleResetPassword = () => {
    console.log()
    auth.resetPassword({ "password": passwordInputValue, "token": tokenInputValue })
  }

  return (
    <div className={`${resetPasswordStyles.page} text text_type_main-default`}>
      <AppHeader />
      <main className={resetPasswordStyles.content}>
        <Form title="Восстановление пароля" buttonText="Сохранить" links={links} onButtonClick={handleResetPassword}>
          <PasswordInput
            onChange={onPasswordInputChange}
            value={passwordInputValue}
            name={'password'}
            extraClass="mb-6"
            placeholder={'Введите новый пароль'}
          />
          <Input
            type={'text'}
            placeholder={'Введите код из письма'}
            onChange={onTokenInputChange}
            value={tokenInputValue}
            name={'token'}
            error={false}
            errorText={'Ошибка'}
            size={'default'}
            extraClass="mb-6"
          />
        </Form>
      </main>
    </div>
  );
}

export default ResetPassword;