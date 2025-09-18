import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./routes/Signup";
import Login from "./routes/Login";
import LandingPage from "./routes/LandingPage";
import Home from "./routes/Home";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        {/* Public route */}
        <Route path="/" element={<LandingPage />} />

        {/* Public but blocked if logged in */}
        <Route
          path="/signup"
          element={
            <ProtectedRoute redirectToIfLoggedIn="/home">
              <Signup />
            </ProtectedRoute>
          }
        />

        <Route
          path="/login"
          element={
            <ProtectedRoute redirectToIfLoggedIn="/home">
              <Login />
            </ProtectedRoute>
          }
        />

        {/* Protected route (must be logged in) */}
        <Route
          path="/home"
          element={
            <ProtectedRoute redirectToIfNotLoggedIn="/">
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
