import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/landing/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/login/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login/:type" element={<Login />} />
        <Route path="signup/:type" element={<Signup />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
