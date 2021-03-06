import React, { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const Verifying = () => {
  return <div>Verifying</div>;
};

const EmailVerify = () => {
  const { type, token } = useParams();
  const { verifyEmail, user } = useAuth();
  const [isVerified, setIsVerified] = useState(false);
  const [email, setEmail] = useState("");
  const [registerToken, setRegisterToken] = useState("");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const callVerifyEmail = async () => {
      try {
        const res = await verifyEmail({
          token,
          type,
        });
        if (res.data.status === "Success") {
          setEmail(res.data.payload.email);
          setRegisterToken(res.data.payload.registerToken);
          setIsVerified(true);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    callVerifyEmail();
  }, []);

  if (user) return <Navigate to={`/`} />;
  return loading ? (
    <Verifying />
  ) : isVerified ? (
    <Navigate
      to="/auth/registration"
      state={{ email, isVerified, type, registerToken }}
    />
  ) : (
    <Navigate to="/" />
  );
};

export default EmailVerify;
