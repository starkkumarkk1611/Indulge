import React, { useState, useRef } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import ismLogo from "../../assets/image/ISMLogo.png";
import ismSideLogo from "../../assets/image/ismSideLogo.png";
import { useAuth } from "../../hooks/useAuth";

// import { ToggleButton } from "../../components/Button";

// const studentAuthenticatedDomain = ["iitism.ac.in"];

// const recuiterAuthenticatedDomain = [
//   "iitism.ac.in",
//   "google.com",
//   "facebook.com",
//   "microsoft.com",
// ];

const Signup = () => {
  const emailRef = useRef();
  const { sendConfirmEmail } = useAuth();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isMailSent, setIsMailSent] = useState(false);
  const [message, setMessage] = useState();

  const { type } = useParams();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    console.log(emailRef.current.value);
    try {
      const res = await sendConfirmEmail({
        email: emailRef.current.value,
        type: type,
      });
      console.log(res);
      if (res.data.status === "Success") {
        setIsMailSent(true);
        setMessage(res.data.message);
      }
    } catch (error) {
      console.log(error.response);
      setError("Some Error Occured");
    }

    setLoading(false);
  };

  if (type === "recruiter" || type === "student")
    return (
      <div className="login-container">
        <Link to="/">Home</Link>
        <div className="side-login-form">
          <div className="login-form-container">
            <img src={ismLogo} height="120rem" alt="" />
            <h1> {type.toUpperCase()} SIGN UP</h1>
            {/* HOC toggle btn  */}
            {!isMailSent ? (
              <form
                style={{
                  display: "flex",
                  flexDirection: "column",
                  // alignItems: "center",
                }}
                className="login-form"
                onSubmit={handleSignup}
              >
                <div style={{ color: "red" }}>{error ? error : ""}</div>
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
                <div
                  style={{
                    // border: "2px solid red",
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
                    Next
                  </button>
                </div>
              </form>
            ) : (
              <div>
                <h1>{`${message}.Open your mail and kindly proceed futher`}</h1>
              </div>
            )}
          </div>
          <div id="new-user">
            Already user?
            <Link to={`/auth/login/${type}`}>Log In </Link>
          </div>
        </div>
        <div className="login-footer-logo">
          <img height={120} src={ismLogo} alt="" />
          <img height={80} src={ismSideLogo} alt="" />
        </div>
      </div>
    );
  else return <Navigate to="/" />;
};

export default Signup;
