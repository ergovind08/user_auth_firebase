import React, { useState, useEffect } from "react";
// import Logo from "../assets/logo.png";
// import Image from "../assets/image.png"; // Add this import
import GoogleSvg from "../assets/icons8-google.svg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Putdata from "./Putdata";
import "./style.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";
import { useHistory } from "react-router-dom";
import Home from "./Home";
import { useNavigate } from "react-router-dom";
const auth = getAuth(app);

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(null); // Track login error
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (loggedIn) {
      navigate("/home");
    }
  }, [loggedIn, navigate]);

  const loginuser = () => {
    console.log("Email:", email);
    console.log("Password:", password);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Login successful", userCredential);
        setLoginError(null);
        setLoggedIn(true);
        navigate("/home");
      })
      .catch((error) => {
        console.error("Error signing in:", error);
        setLoginError(error.message);
      });
  };
  return (
    // <Router>
    <div className="login-main">
      <div className="login-right">
        <div className="login-right-container">
          <div className="login-center">
            <h2>Welcome back!</h2>
            <p>Please enter your details</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                loginuser();
              }}
            >
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Email"
              />

              <div className="pass-input-div">
                <label htmlFor="password">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  placeholder="Password"
                />
                {showPassword ? (
                  <FaEyeSlash
                    aria-label="Hide Password"
                    className="password-toggle-icon"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                ) : (
                  <FaEye
                    aria-label="Show Password"
                    className="password-toggle-icon"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )}
              </div>

              <div className="login-center-buttons">
                <button onClick={loginuser}>Log In yaha</button>
                <button type="button">
                  <img src={GoogleSvg} alt="Google" />
                  Log In with Google
                </button>
              </div>
            </form>
            {loginError && <p className="login-error">{loginError}</p>}
          </div>
          <p className="login-bottom-p">
            Don't have an account? <a href="/signup">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
    // </Router>
  );
};

export default Login;
