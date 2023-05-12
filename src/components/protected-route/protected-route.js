import { Navigate, useLocation } from "react-router-dom";
import { getUser, isAuth } from "../../services/selectors/auth";
import { useSelector } from "react-redux";
import Preloader from "../preloader/preloader";
import PropTypes from 'prop-types';

export function ProtectedRoute({ element, protectedFromAuthorized }) {
  const loggedIn = useSelector(isAuth)
  const user = useSelector(getUser);
  const location = useLocation();

  if (!loggedIn) {
    return (<Preloader />)
  }

  if (protectedFromAuthorized && user.name) {
    const { from } = location.state || { from: { pathname: "/"}};
    return <Navigate to={from}/>;
  }

  if (!protectedFromAuthorized && !user.name) {
    return <Navigate to="/login" state={{ from: location }}/>
  }

  return element;
};

ProtectedRoute.propTypes = {
  protectedFromAuthorized: PropTypes.bool,
  element: PropTypes.object
};

export default ProtectedRoute;