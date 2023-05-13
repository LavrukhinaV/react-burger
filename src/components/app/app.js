import appStyles from "./app.module.css";
import { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loadInitialIngredients } from "../../services/actions/initial-ingredients";
import Main from "../../pages/main/main";
import Login from "../../pages/login/login";
import Register from "../../pages/register/register";
import ForgotPassword from "../../pages/forgot-password/forgot-password";
import ResetPassword from "../../pages/reset-password/reset-password";
import Profile from "../../pages/profile/profile";
import ProtectedRoute from "../protected-route/protected-route";
import { getUserData } from "../../services/actions/auth";
import OrderHistory from "../../pages/order-history/order-history";
import IngredientDetails from "../ingredient-details/ingredient-details";
import Modal from "../modal/modal";
import IngredientPage from "../../pages/ingredient-page/ingredient-page";
import Orders from "../../pages/orders/orders";
import AppHeader from "../app-header/app-header";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const background = location.state && location.state.background;

  const closeModal = () => {
    navigate(-1)
  }

  useEffect(() => {
    dispatch(loadInitialIngredients ());
    dispatch(getUserData())
  }, [])

  return (
    <div className={`${appStyles.page} text text_type_main-default`}>
      <AppHeader />
      <Routes location={background || location}>
        <Route path="/" element={<Main />}/>
        <Route path="/orders" element={<Orders />}/>
        <Route path="/profile" element={<ProtectedRoute element={<Profile />} protectedFromAuthorized={false}/>}/>
        <Route path="/order-history" element={<ProtectedRoute element={<OrderHistory />} protectedFromAuthorized={false}/> }/>
        <Route path="/login" element={<ProtectedRoute element={<Login />} protectedFromAuthorized={true}/>}/>
        <Route path="/register" element={<ProtectedRoute element={<Register />} protectedFromAuthorized={true}/>}/>
        <Route path="/forgot-password" element={<ProtectedRoute element={<ForgotPassword />} protectedFromAuthorized={true}/>}/>
        <Route path="/reset-password" element={<ProtectedRoute element={<ResetPassword />} protectedFromAuthorized={true}/>}/>
        <Route path={'/ingredients/:id'} element={<IngredientPage/>}/>
      </Routes>
      {background && (
        <Routes>
          <Route path={'/ingredients/:id'} element={
            <Modal onClose={closeModal}>
              <IngredientDetails/>
            </Modal>
          }/>
        </Routes>
      )}
    </div>
  );
}

export default App;
