import profileStyles from './profile.module.css';
import AppHeader from "../../components/app-header/app-header";
import ProfileMenu from "../../components/profile-menu/profile-menu";
import { Input, EmailInput, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from "react-redux";
import { getUser } from "../../services/selectors/auth";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUserData } from "../../services/actions/auth";

function Profile() {
  const user = useSelector(getUser);
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    email: user.email ?? "",
    name: user.name ?? "",
    password: ''
  })

  const [disabledFields, setDisabledFields] = useState(['name', 'email', 'password'])

  const changeForm = (e) => {
    const name = e.target.name
    const value = e.target.value

    setForm({
      ...form,
      [name]: value
    })
  }

  const resetForm = () => {
    setForm({
      email: user.email,
      name: user.name,
      password: ''
    })
    setDisabledFields(['name', 'email', 'password'])
  }

  const toggleFieldAvailability = (name) => {
    setDisabledFields(disabledFields.includes(name) ? disabledFields.filter(fieldName => fieldName !== name) : [...disabledFields, name])
  }

  const handleFormSubmit = () => {
    dispatch(updateUserData(form));
    setDisabledFields(['name', 'email', 'password'])
    setForm({
      ...form,
      password: ''
    })
  }

  function objectsEqual(o1, o2) {
    const entries1 = Object.entries(o1);
    const entries2 = Object.entries(o2);
    if (entries1.length !== entries2.length) {
      return false;
    }
    for (let i = 0; i < entries1.length; ++i) {
      if (entries1[i][0] !== entries2[i][0]) {
        return false;
      }
      if (entries1[i][1] !== entries2[i][1]) {
        return false;
      }
    }
    return true;
  }
  
  user.password = ""
  const isUserDataChange = objectsEqual(user, form)

  return (
    <div className={`${profileStyles.page} text text_type_main-default`}>
      <AppHeader />
      <main className={`${profileStyles.content} mt-30`}>
        <div>
          <ProfileMenu />
          <p className="text_color_inactive mt-20">В этом разделе вы можете изменить свои персональные данные</p>
        </div>
        <form>
          <Input
            type={'text'}
            placeholder={'Имя'}
            onChange={changeForm}
            value={form.name}
            name={'name'}
            error={false}
            errorText={'Ошибка'}
            size={'default'}
            icon={'EditIcon'}
            color={"text_color_inactive"}
            extraClass={`${profileStyles.input} mb-6`}
            disabled={disabledFields.includes('name')}
            onIconClick={() => toggleFieldAvailability('name')}
          />
          <EmailInput
            onChange={changeForm}
            value={form.email}
            name={'email'}
            placeholder={'Логин'}
            extraClass="mb-6"
            isIcon={true}
            disabled={disabledFields.includes('email')}
            onIconClick={() => toggleFieldAvailability('email')}
          />
          <PasswordInput
            onChange={changeForm}
            value={form.password}
            name={'password'}
            extraClass="mb-6"
            icon="EditIcon"
          />
          {!isUserDataChange &&
            <div className={profileStyles.buttons}>
              <Button htmlType="button" type="secondary" size="medium" onClick={resetForm}>
                Отмена
              </Button>
              <Button htmlType="button" type="primary" size="medium" onClick={handleFormSubmit}>
                Сохранить
              </Button>
            </div>
          }
        </form>
      </main>
    </div>
  )
};

export default Profile;