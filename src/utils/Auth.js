import { useContext, createContext } from "react";

const AuthContext = createContext(undefined);

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}

export function useProvideAuth() {
  const BASE_URL = 'https://norma.nomoreparties.space/api';

  const checkResponse = (res) => {
    if (res.ok) {
      console.log(res)
      return res.json();
    }
    return Promise.reject(res.status)
  };

  const forgotPassword = async (email) => {
    const res = await fetch(`${BASE_URL}/password-reset`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(email)
    });
    return checkResponse(res);
  };

  const resetPassword = async (data) => {

    const res = await fetch(`${BASE_URL}/password-reset/reset`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
    return checkResponse(res);
  };

  return {
    forgotPassword,
    resetPassword
  };
}