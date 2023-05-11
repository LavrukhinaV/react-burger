import { useState } from "react";
import registerStyles from './register.module.css';
import AppHeader from "../../components/app-header/app-header";
import { Input, EmailInput, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import Form from "../../components/form/form";
import { signUp } from "../../services/actions/auth";
import { useDispatch } from 'react-redux';

const links = [
  {
    title: "Уже зарегистрированы?",
    linkName: "Войти",
    path: "/login",
  },
];

function Register() {
  const dispatch = useDispatch();

  const [nameInputValue, setNameInputValue] = useState('')
  const [emailInputValue, setEmailInputValue] = useState('');
  const [passwordInputValue, setPasswordInputValue] = useState('')

  const onEmailInputChange = e => {
    setEmailInputValue(e.target.value)
  }

  const onPasswordInputChange = e => {
    setPasswordInputValue(e.target.value)
  }

  const onNamedInputChange = e => {
    setNameInputValue(e.target.value)
  }

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(signUp({
      "email": emailInputValue,
      "password": passwordInputValue,
      "name": nameInputValue
    }));
  }
  
  return (
    <div className={`${registerStyles.page} text text_type_main-default`}>
      <AppHeader />
      <main className={registerStyles.content}>
        <Form title="Регистрация" buttonText="Зарегистрироваться" links={links} onButtonClick={handleRegister}>
          <Input
            type={'text'}
            placeholder={'Имя'}
            onChange={onNamedInputChange}
            value={nameInputValue}
            name={'name'}
            error={false}
            errorText={'Ошибка'}
            size={'default'}
            extraClass="mb-6"
          />
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

export default Register;