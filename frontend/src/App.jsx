import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./routes/Signup";
import Login from "./routes/Login";
import LandingPage from "./routes/LandingPage";
import Home from "./routes/Home"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path = "/home"element = {<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
