import { NavLink, Link } from "react-router-dom";
import headerStyles from './app-header.module.css'; 
import { Logo, ListIcon, BurgerIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function AppHeader() {
  return (
    <header className={headerStyles.header}>
      <div className={`${headerStyles.container} pb-4 pt-4`}>
        <nav className={headerStyles.nav}>
          <NavLink
          className={({ isActive }) =>
            `${headerStyles.link} p-5 mr-2 ${isActive ? `text_color_primary` : `text_color_inactive`}`
          }
          to="/"
          >
            {({ isActive }) => (
              <>
                <BurgerIcon type={isActive ? "primary" : "secondary"} />
                <p className="text text_type_main-default ml-2">Конструктор</p>
              </>
            )}
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${headerStyles.link} p-5 mr-2 ${isActive ? `text_color_primary` : `text_color_inactive`}`
            }
            to="/feed">
            {({ isActive }) => (
              <>
                <ListIcon type={isActive ? "primary" : "secondary"} />
                <p className="text text_type_main-default ml-2">Лента заказов</p>
              </>
            )}
          </NavLink>
        </nav>
        <Link to="/">
          <Logo />
        </Link>
        <NavLink
          className={({ isActive }) =>
            `${headerStyles.link} p-5 mr-2 ${isActive ? `text_color_primary` : `text_color_inactive`}`
            }
          to="/profile">
          {({ isActive }) => (
            <>
              <ProfileIcon type={isActive ? "primary" : "secondary"} />
              <p className="text text_type_main-default ml-2">Личный кабинет</p>
            </>
          )}
        </NavLink>
      </div>
    </header>
  )
}

export default AppHeader;