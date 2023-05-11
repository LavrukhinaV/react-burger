import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loadInitialIngredients } from "./services/actions/initial-ingredients";
import Main from "./pages/main/main";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import ForgotPassword from "./pages/forgot-password/forgot-password";
import ResetPassword from "./pages/reset-password/reset-password";
import Profile from "./pages/profile/profile";
import ProtectedRouteElement from "./components/protected-route-element/protected-route-element";
import { getUserData } from "./services/actions/auth";
import OrderHistory from "./pages/order-history/order-history";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadInitialIngredients ());
    dispatch(getUserData())
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/profile" element={<ProtectedRouteElement element={<Profile />} path="/login"/>}/>
        <Route path="/order-history" element={<ProtectedRouteElement element={<OrderHistory />} path="/login"/>}/>
        <Route path="/login" element={<ProtectedRouteElement element={<Login />} path="/" protectedFromAuthorized={true}/>}/>
        <Route path="/register" element={<ProtectedRouteElement element={<Register />} path="/" protectedFromAuthorized={true}/>}/>
        <Route path="/forgot-password" element={<ProtectedRouteElement element={<ForgotPassword />} path="/" protectedFromAuthorized={true}/>}/>
        <Route path="/reset-password" element={<ProtectedRouteElement element={<ResetPassword />} path="/" protectedFromAuthorized={true}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
