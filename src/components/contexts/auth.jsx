import React, { createContext, useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api, createSession } from "../../services/api";

export const AuthContext = createContext({
  user: null,
  setUser: () => null,
  loginUser: () => {},
  loading: null,
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const recoveredUser = localStorage.getItem("user");
    const token = localStorage.getItem("token");


    if (recoveredUser && token) {
      setUser(JSON.parse(recoveredUser));
      api.defaults.headers.Authorization = `Bearer ${token}`;
    }

    setLoading(false);
  }, []);

  const loginUser = async (email, password) => {
    const data = { email, password };
    api.post("login", data).then((response) => {
      const loggedUser = response.data.message.user;
      const token = response.data.message.token;
      localStorage.setItem("user", JSON.stringify(loggedUser));
      localStorage.setItem("token", token);

      api.defaults.headers.Authorization = `Bearer ${token}`;

      setUser(loggedUser);

      navigate("/");
    });
  };

  const logoutUser = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    api.defaults.headers.Authorization = null;
    setUser(null);
    navigate("/login");
  };

  const value = { user, setUser, loginUser, logoutUser, loading };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
