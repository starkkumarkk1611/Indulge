import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/landing/home/Home";
import Login from "./pages/auth/Login";
import EmailVerify from "./pages/auth/EmailVerify";
import Signup from "./pages/auth/Signup";
import RegistrationForm from "./pages/auth/RegistrationForm";
import AdminPortal from "./pages/landing/adminPortal/AdminPortal";
import StudentPortal from "./pages/landing/studentPortal/StudentPortal";
import RecruiterPortal from "./pages/landing/recruiterPortal/RecruiterPortal";
import Jnf from "./pages/landing/recruiterPortal/forms/Jnf";
import Inf from "./pages/landing/recruiterPortal/forms/Inf";
import JnfInfStatus from "./pages/landing/recruiterPortal/jnfInfStatus/JnfInfStatus";
import EditJnf from "./pages/landing/recruiterPortal/forms/EditJnf";
import ViewJnf from "./pages/landing/recruiterPortal/forms/ViewJnf"
import { useAuth } from "./hooks/useAuth";

function App() {
  const { user } = useAuth();
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<RecruiterPortal />} /> */}
        <Route path="/" element={user?.type === "recruiter" ? <RecruiterPortal /> : user?.type === "student" ? <StudentPortal /> : user?.type === "admin" ? <AdminPortal /> : <Home />} />
        <Route path="auth/login/:type" element={<Login />} />
        <Route path="auth/signup/:type" element={<Signup />} />
        <Route path="auth/:type/verify/:token" element={<EmailVerify />} />
        <Route path="auth/registration" element={<RegistrationForm />} />
        {user && user.type === "recruiter" && <Route path="recruiter/fill-jnf" element={<Jnf />} />}
        {user && user.type === "recruiter" && <Route path="recruiter/fill-Inf" element={<Inf />} />}
        {user && user.type === "recruiter" && <Route path="recruiter/jnf-inf-status" element={<JnfInfStatus />} />}
        {user && user.type === "recruiter" && <Route path="recruiter/edit-jnf" element={<EditJnf />} />}
        {user && user.type === "admin" && <Route path="admin/view-jnf" element={<ViewJnf />} />}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
