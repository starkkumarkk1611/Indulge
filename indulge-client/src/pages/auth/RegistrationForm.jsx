import React, { useState, useRef } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const RecruiterRegistrationForm = ({ email, registerToken }) => {
  const [error, setError] = useState("");
  const { register } = useAuth();

  const nameRef = useRef();
  const companyRef = useRef();
  const passwordRef = useRef();
  const repeatPasswordRef = useRef();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(
      companyRef.current.value,
      passwordRef.current.value,
      repeatPasswordRef.current.value,
      nameRef.current.value,
      email
    );
    try {
      const res = await register({
        email: email,
        name: nameRef.current.value,
        type: "recruiter",
        password: passwordRef.current.value,
        repeatPassword: repeatPasswordRef.current.value,
        company: companyRef.current.value,
        registerToken: registerToken,
      });
      console.log(res);
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <div>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          // alignItems: "center",
        }}
        className="login-form"
        onSubmit={handleSubmit}
      >
        <div>{error ? error : ""}</div>
        <div className="label-input-group">
          <input
            placeholder="Name"
            ref={nameRef}
            type="text"
            name="name"
            id="recruiter-name"
            required
          />
        </div>
        <div className="label-input-group">
          <input
            placeholder="Company Name"
            ref={companyRef}
            type="text"
            name="company"
            id="recruiter-company"
            required
          />
        </div>
        <div className="label-input-group">
          <input
            placeholder="Password"
            ref={passwordRef}
            type="password"
            name="password"
            id="recruiter-password"
            autoComplete="on"
            required
          />
        </div>
        <div className="label-input-group">
          <input
            placeholder="Repeat Password"
            ref={repeatPasswordRef}
            type="password"
            name="repeat-password"
            id="recruiter-repeat-password"
            autoComplete="on"
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
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

const StudentRegistrationForm = ({ email, registerToken }) => {
  const [error, setError] = useState("");
  const { register } = useAuth();

  const nameRef = useRef();
  const passwordRef = useRef();
  const repeatPasswordRef = useRef();
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(
      passwordRef.current.value,
      repeatPasswordRef.current.value,
      nameRef.current.value,
      email
    );
    try {
      const res = await register({
        email: email,
        name: nameRef.current.value,
        type: "student",
        password: passwordRef.current.value,
        repeatPassword: repeatPasswordRef.current.value,
        registerToken: registerToken,
      });
      console.log(res);
      setLoading(false);
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <div>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          // alignItems: "center",
        }}
        className="login-form"
        onSubmit={handleSubmit}
      >
        <div>{error ? error : ""}</div>
        <div className="label-input-group">
          <input
            placeholder="Name"
            ref={nameRef}
            type="text"
            name="name"
            id="recruiter-name"
            required
          />
        </div>

        <div className="label-input-group">
          <input
            placeholder="Password"
            ref={passwordRef}
            type="password"
            name="password"
            id="recruiter-password"
            autoComplete="on"
            required
          />
        </div>
        <div className="label-input-group">
          <input
            placeholder="Repeat Password"
            ref={repeatPasswordRef}
            type="password"
            name="repeat-password"
            id="recruiter-repeat-password"
            autoComplete="on"
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
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

const RegistrationForm = () => {
  const { state } = useLocation();

  console.log(state);
  if (!state) return <Navigate to="/" />;
  if (!state.isVerified) return <Navigate to="/" />;
  if (!state.email) return <h1>Something Went Wrong</h1>;
  if (state.type === "recruiter")
    return (
      <RecruiterRegistrationForm
        email={state.email}
        registerToken={state.registerToken}
      />
    );
  if (state.type === "student")
    return (
      <StudentRegistrationForm
        email={state.email}
        registerToken={state.registerToken}
      />
    );
  return;
};

export default RegistrationForm;