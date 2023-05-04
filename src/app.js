import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loadInitialIngredients } from "./services/actions/initial-ingredients";
import Main from "./pages/main/main";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import ForgotPassword from "./pages/forgot-password/forgot-password";
import ResetPassword from "./pages/reset-password/reset-password";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadInitialIngredients ())
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/forgot-password" element={<ForgotPassword />}/>
        <Route path="/reset-password" element={<ResetPassword />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
