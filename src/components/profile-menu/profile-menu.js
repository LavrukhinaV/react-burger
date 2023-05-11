import profileMenuStyles from './profile-menu.module.css';
import { NavLink } from "react-router-dom";
import { signOut } from "../../services/actions/auth";
import { useDispatch } from 'react-redux';

function ProfileMenu() {
  const dispatch = useDispatch();

  const handleLogoutClick = () => {
    dispatch(signOut());
  }
  return (
    <nav className={profileMenuStyles.menu}>
      <NavLink
        to="/profile"
        className={({ isActive }) =>
          `${profileMenuStyles.link} text_type_main-medium ${isActive ? "text_color_primary" : "text_color_inactive"}`
        }
      >
        Профиль
      </NavLink>
      <NavLink
        to="/order-history"
        className={({ isActive }) =>
          `${profileMenuStyles.link} text_type_main-medium ${isActive ? "text_color_primary" : "text_color_inactive"}`
        }
      >
        История заказов
      </NavLink>
      <NavLink
        to="/login"
        onClick={handleLogoutClick}
        className={({ isActive }) =>
          `${profileMenuStyles.link} text_type_main-medium ${isActive ? "text_color_primary" : "text_color_inactive"}`
        }
      >
        Выход
      </NavLink>
    </nav>
  )
};

export default ProfileMenu;