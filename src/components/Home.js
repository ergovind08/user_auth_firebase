// Home.js
import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { authenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!authenticated) {
      navigate("/login");
    }
  }, [authenticated, navigate]);

  return (
    <div>
      {authenticated && (
        <>
          <h1>Welcome to the Home Page!</h1>
          {/* Other content of the Home page */}
        </>
      )}
    </div>
  );
};

export default Home;
