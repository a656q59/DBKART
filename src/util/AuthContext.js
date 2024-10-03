// src/util/AuthContext.js
import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // UseNavigate must be inside a component that is within Router context
  const login = (username, password, navigate) => {
    if (username === "admin" && password === "password") {
      setIsAuthenticated(true);
      navigate("/admin");
    } else {
      alert("Invalid credentials");
    }
  };

  const logout = (navigate) => {
    setIsAuthenticated(false);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
