import profileStyles from './profile.module.css';
import ProfileMenu from "../../components/profile-menu/profile-menu";
import { Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from "react-redux";
import { getUser } from "../../services/selectors/auth";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUserData } from "../../services/actions/auth";
import { objectsEqual } from "../../utils/utils";
import { useForm } from "../../hooks/useForm";

function Profile() {
  const user = useSelector(getUser);
  const dispatch = useDispatch();

  const {values, handleChange, setValues} = useForm({
    email: user.email ?? "",
    name: user.name ?? "",
    password: ''
  });

  const [disabledFields, setDisabledFields] = useState(['name', 'email', 'password'])

  const resetForm = () => {
    setValues({
      email: user.email,
      name: user.name,
      password: ''
    })
    setDisabledFields(['name', 'email', 'password'])
  }

  const toggleFieldAvailability = (name: string) => {
    setDisabledFields(disabledFields.includes(name) ? disabledFields.filter(fieldName => fieldName !== name) : [...disabledFields, name])
  }

  const handleFormSubmit = () => {
    //@ts-ignore
    dispatch(updateUserData(values));
    setDisabledFields(['name', 'email', 'password'])
    setValues({
      ...values,
      password: ''
    })
  }

  user.password = ""
  const isUserDataChange = objectsEqual(user, values)

  return (
    <main className={`${profileStyles.content} mt-30`}>
      <div>
        <ProfileMenu />
        <p className="text_color_inactive mt-20">В этом разделе вы можете изменить свои персональные данные</p>
      </div>
      <form>
        <Input
          type={'text'}
          placeholder={'Имя'}
          onChange={handleChange}
          value={values.name}
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
        <Input
          onChange={handleChange}
          value={values.email}
          name={'email'}
          placeholder={'Логин'}
          extraClass="mb-6"
          icon={'EditIcon'}
          disabled={disabledFields.includes('email')}
          onIconClick={() => toggleFieldAvailability('email')}
        />
        <PasswordInput
          onChange={handleChange}
          value={values.password}
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
  )
};

export default Profile;