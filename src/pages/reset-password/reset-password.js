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

  const [form, setForm] = useState({
    token: "",
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

  const handleResetPassword = () => {
    resetPassword({ "password": form.password, "token": form.token })
    navigate('/login')
  }

  useEffect(() => {
    if (!location.state) {
      navigate("/forgot-password", { replace: true})
    }
  }, [])

  if (location.state && location.state.from === "forgot-password") {
    return (
      <div className={`${resetPasswordStyles.page} text text_type_main-default`}>
        <AppHeader />
        <main className={resetPasswordStyles.content}>
          <Form title="Восстановление пароля" buttonText="Сохранить" links={links} onButtonClick={handleResetPassword}>
            <PasswordInput
              onChange={changeForm}
              value={form.password}
              name={'password'}
              extraClass="mb-6"
              placeholder={'Введите новый пароль'}
            />
            <Input
              type={'text'}
              placeholder={'Введите код из письма'}
              onChange={changeForm}
              value={form.token}
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