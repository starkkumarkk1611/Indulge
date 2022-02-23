import React, { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const Verifying = () => {
  return <div>Verifying</div>;
};

const EmailVerify = () => {
  const { type, token } = useParams();
  const { verifyEmail } = useAuth();
  const [isVerified, setIsVerified] = useState(false);
  const [email, setEmail] = useState("");
  const [registerToken, setRegisterToken] = useState("");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(type, token);
    const callVerifyEmail = async () => {
      try {
        const res = await verifyEmail({
          token,
          type,
        });
        console.log(res);
        if (res.data.status === "Success") {
          setEmail(res.data.payload.email);
          setRegisterToken(res.data.payload.registerToken);
          setIsVerified(true);
          console.log(res.data.payload.email);
        }
        alert("success");
        setLoading(false);
      } catch (error) {
        alert("fali");
        console.log(error);
        setLoading(false);
      }
    };
    callVerifyEmail();
  }, []);

  return loading ? (
    <Verifying />
  ) : isVerified ? (
    <Navigate
      to="/auth/registration"
      state={{ email, isVerified, type, registerToken }}
    />
  ) : (
    // <Navigate to="/" />
    <div>Fails</div>
  );
};

export default EmailVerify;
