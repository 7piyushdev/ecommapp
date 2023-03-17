import React, { useState, useEffect } from "react";
import AuthContext from "./Auth-Context";

export const AuthProvider = (props) => {
  //   const initialToken = localStorage.getItem("token");
  //   console.log(initialToken);
  const [token, setToken] = useState(null);

  const userIsLoggedIn = !!token;

  const loginHandler = (token) => {
    localStorage.setItem("token", JSON.stringify(token));
    setToken(token);
  };

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    setToken(null);
  };

  const authContext = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token);
  }, []);

  return (
    <AuthContext.Provider value={authContext}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
