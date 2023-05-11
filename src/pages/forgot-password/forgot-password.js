import forgotPasswordStyles from './forgot-password.module.css';
import AppHeader from "../../components/app-header/app-header";
import Form from "../../components/form/form";
import { EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from "react";
import { forgotPassword } from "../../utils/Auth";

const links = [
  {
    title: "Вспомнили пароль?",
    linkName: "Войти",
    path: "/login",
  },
];

function ForgotPassword() {
  const [emailInputValue, setEmailInputValue] = useState({email: ''});

  const onEmailInputChange = e => {
    setEmailInputValue({ ...emailInputValue, [e.target.name]: e.target.value })
  }

  const handleForgotPassword = () => {
    forgotPassword(emailInputValue)
  }

  return (
    <div className={`${forgotPasswordStyles.page} text text_type_main-default`}>
      <AppHeader />
      <main className={forgotPasswordStyles.content}>
        <Form title="Восстановление пароля" buttonText="Восстановить" links={links} onButtonClick={handleForgotPassword}>
          <EmailInput
            onChange={onEmailInputChange}
            value={emailInputValue.email}
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