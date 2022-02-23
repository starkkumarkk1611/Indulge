import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/landing/Home";
import Login from "./pages/auth/Login";
import EmailVerify from "./pages/auth/EmailVerify";
import Signup from "./pages/auth/Signup";
import { AuthProvider } from "./hooks/useAuth";
import RegistrationForm from "./pages/auth/RegistrationForm";


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
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
