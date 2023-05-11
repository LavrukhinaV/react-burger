import profileStyles from './profile.module.css';
import AppHeader from "../../components/app-header/app-header";
import ProfileMenu from "../../components/profile-menu/profile-menu";
import { Input, EmailInput, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';

function Profile() {
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
            // onChange={onNamedInputChange}
            // value={nameInputValue}
            name={'name'}
            error={false}
            errorText={'Ошибка'}
            size={'default'}
            extraClass="mb-6"
          />
          <EmailInput
            // onChange={onEmailInputChange}
            // value={emailInputValue}
            name={'login'}
            placeholder={'Логин'}
            isIcon={false}
            extraClass="mb-6"
          />
          <PasswordInput
            // onChange={onPasswordInputChange}
            // value={passwordInputValue}
            name={'password'}
            extraClass="mb-6"
          />
        </form>
      </main>
    </div>
  )
};

export default Profile;