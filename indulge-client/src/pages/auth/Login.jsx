import React, { useState, useRef } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
// import { ToggleButton } from "../../components/Button";
import "./loginSignup.css";
import ismLogo from "../../assets/image/ISMLogo.png";
import ismSideLogo from "../../assets/image/ismSideLogo.png";
import { useAuth } from "../../hooks/useAuth";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { type } = useParams();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login, user } = useAuth();
  const handleLoginIn = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await login({
        email: emailRef.current.value,
        password: passwordRef.current.value,
        type: type,
      });
    } catch (error) {
      setError(error.response.data.message);
    }

    setLoading(false);
  };
  if (user) return <Navigate to={`/`} />;
  if (type === "recruiter" || type === "student" || type === "admin")
    return (
      <div className="login-container">
        <Link to="/">
          <div className="login-footer-logo">
            <img height={120} src={ismLogo} alt="" />
            <img height={80} src={ismSideLogo} alt="" />
          </div>
        </Link>
        <div className="side-login-form">
          <div className="login-form-container">
            <img src={ismLogo} height="120rem" alt="" />
            <h1> {type.toUpperCase()} SIGN IN</h1>
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                // alignItems: "center",
              }}
              className="login-form"
              onSubmit={handleLoginIn}
            >
              <div className="text-danger">{error ? error : ""}</div>
              <div className="label-input-group">
                <input
                  placeholder="Email Address"
                  ref={emailRef}
                  type="email"
                  name="emai"
                  id="user-email"
                  required
                />
              </div>
              <div className="label-input-group">
                <input
                  placeholder="Password"
                  ref={passwordRef}
                  type="password"
                  name="password"
                  id="user-password"
                  autoComplete="on"
                  required
                />
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  margin: "1rem 0",
                  alignItems: "center",
                }}
              >
                <button
                  style={{
                    fontSize: "1.3rem",
                    padding: "0.6rem 3rem",
                    margin: "0 1rem 0 0",
                  }}
                  disabled={loading}
                  type="submit"
                >
                  Login
                </button>
                <Link
                  style={{
                    textDecoration: "none",
                    fontWeight: "600",
                    fontSize: "1.3rem",
                  }}
                  to="/forgot-password"
                >
                  Forgot Password?
                </Link>
              </div>
            </form>
          </div>
          {type !== "admin" && (
            <div id="new-user">
              New user?
              <Link to={`/auth/signup/${type}`}>Sign Up </Link>
            </div>
          )}
        </div>
      </div>
    );
  else return <Navigate to="/" />;
};

export default Login;
