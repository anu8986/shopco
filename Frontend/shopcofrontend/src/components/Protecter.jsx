import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

const Protecter = ({ children }) => {
  const location = useLocation();
  const [token, setToken] = useState(null);

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user");
      const userinfo = storedUser ? JSON.parse(storedUser) : null;
      setToken(userinfo?.data?.token || userinfo?.token);
    } catch (err) {
      console.error(err);
    }
  }, []);

  if (token === null) {
    // still checking, render nothing or loader
    return null;
  }

  if (!token) {
    return (
      <Navigate
        to="/login"
        state={{ from: location.pathname }}
        replace:false
      />
    );
  }

  return children;
};

export default Protecter;
