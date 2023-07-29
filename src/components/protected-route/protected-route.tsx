import { Navigate, useLocation } from "react-router-dom";
import { isAuth, isAuthChecked } from "../../services/selectors/auth";
import { useSelector } from "../../services/hooks/hooks";
import Preloader from "../preloader/preloader";
import { FC, ReactElement } from "react";

type ProtectedRoutePropsType = {
  element: ReactElement;
  protectedFromAuthorized: boolean;
};

const ProtectedRoute: FC<ProtectedRoutePropsType> = ({ element, protectedFromAuthorized = false }) => {
  const isUserAuthChecked = useSelector(isAuthChecked)
  const isUserAuth = useSelector(isAuth)
  const location = useLocation();

  if (!isUserAuthChecked && isUserAuth === null) {
    return (<Preloader />)
  }

  if (protectedFromAuthorized && isUserAuth) {
    const { from } = location.state || { from: { pathname: "/"}};
    return <Navigate to={from}/>;
  }

  if (!protectedFromAuthorized && isUserAuth === false) {
    return <Navigate to="/login" state={{ from: location }}/>
  }

  return element;

};

export default ProtectedRoute;