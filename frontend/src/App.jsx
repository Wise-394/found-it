import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./routes/signup";
import Login from "./routes/login";
import LandingPage from "./routes/landing-page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
