import React, { createContext, useState, useContext, useEffect } from "react";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [auth, setAuth] = useState({

    isAuthenticated: false,

    user: null,

  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const storedAuth = localStorage.getItem("auth");

    if (storedAuth) {
      setAuth(JSON.parse(storedAuth));

    }

    setLoading(false);
  }, []);

  const login = (email, password) => {

    if (email === "test@watsoo.com" && password === "Test@123") {

      const newAuth = { isAuthenticated: true, user: { email } };

      setAuth(newAuth);

      localStorage.setItem("auth", JSON.stringify(newAuth));

      return { success: true };

    } else {

      return { success: false, message: "Invalid credentials" };

    }

  };

  const logout = () => {

    setAuth({ isAuthenticated: false, user: null });

    localStorage.removeItem("auth");

  };

  return (
    <AuthContext.Provider value={{ auth, login, logout, loading }}>
      {children}
    </AuthContext.Provider>

  );

};

export const useAuth = () => useContext(AuthContext);
