import { useForm } from "../../hooks/useForm";
import registerStyles from './register.module.css';
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

  const { values, handleChange } = useForm({
    email: "",
    password: "",
    name: ""
  });

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(signUp(values));
    navigate("/login")
  }
  
  return (
    <main className={registerStyles.content}>
      <Form title="Регистрация" buttonText="Зарегистрироваться" links={links} onFormSubmit={handleRegister}>
        <Input
          type={'text'}
          placeholder={'Имя'}
          onChange={handleChange}
          value={values.name}
          name={'name'}
          error={false}
          errorText={'Ошибка'}
          size={'default'}
          extraClass="mb-6"
        />
        <EmailInput
          onChange={handleChange}
          value={values.email}
          name={'email'}
          isIcon={false}
          extraClass="mb-6"
        />
        <PasswordInput
          onChange={handleChange}
          value={values.password}
          name={'password'}
          extraClass="mb-6"
        />
      </Form>
    </main>
  );
}

export default Register;