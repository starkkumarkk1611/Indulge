import React, { useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import ismLogo from "../../assets/image/ISMLogo.png";
import ismSideLogo from "../../assets/image/ismSideLogo.png";

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

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { type } = useParams();
  console.log(type);

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

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

  return (
    <div className="login-container">
      <Link to="/">Home</Link>
      <div className="side-login-form">
        <div className="login-form-container">
          <img src={ismLogo} height="120rem" alt="" />
          <h1> {type.toUpperCase()} SIGN UP</h1>
          {/* HOC toggle btn  */}
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              // alignItems: "center",
            }}
            className="login-form"
            onSubmit={handleSignup}
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
        </div>
        <div id="new-user">
          Already user?
          <Link to={`/login/${type}`}>Log In </Link>
        </div>
      </div>
      <div className="login-footer-logo">
        <img height={120} src={ismLogo} alt="" />
        <img height={80} src={ismSideLogo} alt="" />
      </div>
    </div>
  );
};

export default Signup;
