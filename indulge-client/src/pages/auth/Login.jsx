import React, { useState, useRef } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
// import { ToggleButton } from "../../components/Button";
import "./loginSignup.css";
import ismLogo from "../../assets/image/ISMLogo.png";
import ismSideLogo from "../../assets/image/ismSideLogo.png";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { type } = useParams();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  console.log(type);

  const handleLoginIn = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    console.log("oos");
    // signInEmailAndPassword(emailRef.current.value, passwordRef.current.value)
    //   .then((res) => {
    //     setShowAuthFormModal(false);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     try {
    //       console.log(error.response)
    //       if (error.response) {
    //         if (error.response.data.message === "User not found in database") {
    //           return setShowTagSelection(true);
    //         }
    //         setError("Login Fails");
    //       }
    //     } catch { }
    //     try {
    //       console.log(error.code)
    //       if (error.code) setError(error.code);
    //     } catch { }
    //   });
    setLoading(false);
  };
  if (type === "recruiter" || type === "student" || type === "admin")
    return (
      <div className="login-container">
        <Link to="/">Home</Link>
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
              <div>{error ? error : ""}</div>
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
        <div className="login-footer-logo">
          <img height={120} src={ismLogo} alt="" />
          <img height={80} src={ismSideLogo} alt="" />
        </div>
      </div>
    );
  else return <Navigate to="/" />;
};

export default Login;
