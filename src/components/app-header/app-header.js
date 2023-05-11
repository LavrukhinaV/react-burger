import { Link } from "react-router-dom";
import headerStyles from './app-header.module.css'; 
import { Logo, ListIcon, BurgerIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function AppHeader() {
  return (
    <header className={headerStyles.header}>
      <div className={`${headerStyles.container} pb-4 pt-4`}>
        <nav className={headerStyles.nav}>
          <button className={`${headerStyles.link} p-5 mr-2`}>
            <BurgerIcon type="primary" />
            <p className="text text_type_main-default ml-2">Конструктор</p>
          </button>
          <button className={`${headerStyles.link} p-5`}>
            <ListIcon type="primary" />
            <p className="text text_type_main-default ml-2">Лента заказов</p>
          </button>
        </nav>
        <Logo />
        <Link className={`${headerStyles.link} pb-4 pt-4`} to="/profile">
          <ProfileIcon type="primary" />
          <p className="text text_type_main-default ml-2">Личный кабинет</p>
        </Link>
      </div>
    </header>
  )
}

export default AppHeader;