import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/landing/Home";
import Login from "./pages/auth/Login";
import EmailVerify from "./pages/auth/EmailVerify";
import Signup from "./pages/auth/Signup";
import { AuthProvider } from "./hooks/useAuth";
import RegistrationForm from "./pages/auth/RegistrationForm";
import AdminPortal from "./pages/landing/AdminPortal";
import StudentPortal from "./pages/landing/StudentPortal";
import RecruiterPortal from "./pages/landing/RecruiterPortal";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth/login/:type" element={<Login />} />
          <Route path="/auth/signup/:type" element={<Signup />} />
          <Route path="/auth/:type/verify/:token" element={<EmailVerify />} />
          <Route path="/auth/registration" element={<RegistrationForm />} />
          <Route path="/recruiter" element={<RecruiterPortal />} />
          <Route path="/student" element={<StudentPortal />} />
          <Route path="/admin" element={<AdminPortal />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
