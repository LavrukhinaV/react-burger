import forgotPasswordStyles from './forgot-password.module.css';
import Form from "../../components/form/form";
import { EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { forgotPassword } from "../../utils/Auth";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { TLink } from '../../utils/types';

const links: Array<TLink> = [
  {
    title: "Вспомнили пароль?",
    linkName: "Войти",
    path: "/login",
  },
];

function ForgotPassword() {
  const navigate = useNavigate();

  const { values, handleChange } = useForm({
    email: "",
  });

  const handleForgotPassword = () => {
    forgotPassword(values)
    navigate('/reset-password', { replace: true, state: {from: 'forgot-password'} });
  }

  return (
    <main className={forgotPasswordStyles.content}>
      <Form title="Восстановление пароля" buttonText="Восстановить" links={links} onFormSubmit={handleForgotPassword}>
        <EmailInput
          onChange={handleChange}
          value={values.email}
          name={'email'}
          isIcon={false}
          extraClass="mb-6"
        />
      </Form>
    </main>
  );
}

export default ForgotPassword;