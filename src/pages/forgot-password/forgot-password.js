import forgotPasswordStyles from './forgot-password.module.css';
import AppHeader from "../../components/app-header/app-header";
import Form from "../../components/form/form";
import { EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from "react";

const links = [
  {
    title: "Вспомнили пароль?",
    linkName: "Войти",
    path: "/login",
  },
];

function ForgotPassword() {
  const [emailInputValue, setEmailInputValue] = useState('');

  const onEmailInputChange = e => {
    setEmailInputValue(e.target.value)
  }

  return (
    <div className={`${forgotPasswordStyles.page} text text_type_main-default`}>
      <AppHeader />
      <main className={forgotPasswordStyles.content}>
        <Form title="Восстановление пароля" buttonText="Восстановить" links={links}>
          <EmailInput
            onChange={onEmailInputChange}
            value={emailInputValue}
            name={'email'}
            isIcon={false}
            extraClass="mb-6"
          />
        </Form>
      </main>
    </div>
  );
}

export default ForgotPassword;