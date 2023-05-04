import resetPasswordStyles from './reset-password.module.css';
import AppHeader from "../../components/app-header/app-header";
import Form from "../../components/form/form";
import { PasswordInput, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from "react";

const links = [
  {
    title: "Вспомнили пароль?",
    linkName: "Войти",
    path: "/login",
  },
];

function ResetPassword() {
  const [passwordInputValue, setPasswordInputValue] = useState('')
  const [codeInputValue, setCodeInputValue] = useState('')

  const onPasswordInputChange = e => {
    setPasswordInputValue(e.target.value)
  }

  const onCodeInputChange = e => {
    setCodeInputValue(e.target.value)
  }

  return (
    <div className={`${resetPasswordStyles.page} text text_type_main-default`}>
      <AppHeader />
      <main className={resetPasswordStyles.content}>
        <Form title="Восстановление пароля" buttonText="Сохранить" links={links}>
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
            onChange={onCodeInputChange}
            value={codeInputValue}
            name={'code'}
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