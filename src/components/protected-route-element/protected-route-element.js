import { Navigate, useLocation } from "react-router-dom";
import { getUser, isAuth } from "../../services/selectors/auth";
import { useSelector } from "react-redux";

export function ProtectedRouteElement({ element, path, protectedFromAuthorized }) {
  const loggedIn = useSelector(isAuth)
  const user = useSelector(getUser);
  const location = useLocation();
  // console.log(location)

  if (!protectedFromAuthorized) {
    const { from } = location.state || { from: { pathname: "/"}};
    return loggedIn && user.name ? element : <Navigate to={path}/>;
  } else {
    return loggedIn && user.name ? <Navigate to={path}/> : element;
  }
};

export default ProtectedRouteElement;