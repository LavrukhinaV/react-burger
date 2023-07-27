import resetPasswordStyles from './reset-password.module.css';
import Form from "../../components/form/form";
import { PasswordInput, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { resetPassword } from "../../utils/Auth";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import { TFormValue, TLink } from '../../utils/types';

const links: Array<TLink> = [
  {
    title: "Вспомнили пароль?",
    linkName: "Войти",
    path: "/login",
  },
];

function ResetPassword() {
  const location = useLocation();
  const navigate = useNavigate();

  const { values, handleChange } = useForm<TFormValue>({
    token: "",
    password: ""
  });

  const handleResetPassword = () => {
    resetPassword(values)
    navigate('/login')
  }

  useEffect(() => {
    if (!location.state) {
      navigate("/forgot-password", { replace: true})
    }
  }, [])

  if (location.state && location.state.from === "forgot-password") 
    return (
      <main className={resetPasswordStyles.content}>
        <Form title="Восстановление пароля" buttonText="Сохранить" links={links} onFormSubmit={handleResetPassword}>
          <PasswordInput
            onChange={handleChange}
            value={values.password}
            name={'password'}
            extraClass="mb-6"
            placeholder={'Введите новый пароль'}
          />
          <Input
            type={'text'}
            placeholder={'Введите код из письма'}
            onChange={handleChange}
            value={values.token}
            name={'token'}
            error={false}
            errorText={'Ошибка'}
            size={'default'}
            extraClass="mb-6"
          />
        </Form>
      </main>
    )
    else {
      return null;
   }
}

export default ResetPassword;