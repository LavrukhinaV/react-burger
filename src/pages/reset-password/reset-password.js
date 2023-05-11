import resetPasswordStyles from './reset-password.module.css';
import AppHeader from "../../components/app-header/app-header";
import Form from "../../components/form/form";
import { PasswordInput, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from "react";
import { resetPassword } from "../../utils/Auth";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const links = [
  {
    title: "Вспомнили пароль?",
    linkName: "Войти",
    path: "/login",
  },
];

function ResetPassword() {
  const location = useLocation();
  const navigate = useNavigate();

  const [passwordInputValue, setPasswordInputValue] = useState( "")
  const [tokenInputValue, setTokenInputValue] = useState("")

  const onPasswordInputChange = e => {
    setPasswordInputValue(e.target.value)
  }

  const onTokenInputChange = e => {
    setTokenInputValue(e.target.value)
  }

  const handleResetPassword = () => {
    console.log('reset')
    resetPassword({ "password": passwordInputValue, "token": tokenInputValue })
    navigate('/login')
  }

  useEffect(() => {
    if (!location.state) {
      navigate("/", { replace: true})
    }
  }, [])

  if (location.state && location.state.from === "forgot-password") {
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
}

export default ResetPassword;