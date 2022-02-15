import React, { useState, useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { ToggleButton } from "../../components/Button";

const Login = () => {
  const [loginAs, setLoginAs] = useState("student");

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

  return (
    <div>
      <Link to="/">Home</Link>

      <h1>Login as {type}</h1>
      {/* HOC toggle btn  */}

      <form id="login-form" onSubmit={handleLoginIn}>
        <div>{error ? error : ""}</div>
        <div className="label-input-group">
          <label htmlFor="user-email">Email</label>
          <input
            ref={emailRef}
            type="email"
            name="emai"
            id="user-email"
            required
          />
        </div>
        <div className="label-input-group">
          <label htmlFor="user-password">Password</label>
          <input
            ref={passwordRef}
            type="password"
            name="password"
            id="user-password"
            autoComplete="on"
            required
          />
        </div>
        <input disabled={loading} type="submit" />
      </form>
      <div>
        <p>Don't have account? Create An Account </p>
        <Link to={`/signup/${type}`}>Signup as {type}</Link>
      </div>
    </div>
  );
};

export default Login;
