import React, { useState, useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { ToggleButton } from "../../components/Button";

const studentAuthenticatedDomain = ["iitism.ac.in"];

const recuiterAuthenticatedDomain = [
  "iitism.ac.in",
  "google.com",
  "facebook.com",
  "microsoft.com",
];

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
    <div>
      <Link to="/">Home</Link>

      <h1>Signup As {type}</h1>
      {/* HOC toggle btn  */}

      <form id="login-form" onSubmit={handleSignup}>
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
        <button type="submit" disabled={loading}>
          Next
        </button>
      </form>
      <div>
        <p>Already a user? login</p>
        <Link to={`/login/${type}`}>Login in as {type}</Link>
      </div>
    </div>
  );
};

export default Signup;
