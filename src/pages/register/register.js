import { useState } from "react";
import registerStyles from './register.module.css';
import AppHeader from "../../components/app-header/app-header";
import { Input, EmailInput, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import Form from "../../components/form/form";
import { signUp } from "../../services/actions/auth";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

const links = [
  {
    title: "Уже зарегистрированы?",
    linkName: "Войти",
    path: "/login",
  },
];

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const [form, setForm] = useState({
    email: "",
    password: "",
    name: ""
  })

  const changeForm = (e) => {
    const name = e.target.name
    const value = e.target.value

    setForm({
      ...form,
      [name]: value
    })
  }

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(signUp({
      "email": form.email,
      "password": form.password,
      "name": form.name
    }));
    navigate("/login")
  }
  
  return (
    <div className={`${registerStyles.page} text text_type_main-default`}>
      <AppHeader />
      <main className={registerStyles.content}>
        <Form title="Регистрация" buttonText="Зарегистрироваться" links={links} onButtonClick={handleRegister}>
          <Input
            type={'text'}
            placeholder={'Имя'}
            onChange={changeForm}
            value={form.name}
            name={'name'}
            error={false}
            errorText={'Ошибка'}
            size={'default'}
            extraClass="mb-6"
          />
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

export default Register;