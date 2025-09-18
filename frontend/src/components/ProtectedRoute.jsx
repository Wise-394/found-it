import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // adjust path

const ProtectedRoute = ({
  children,
  redirectToIfNotLoggedIn = null,
  redirectToIfLoggedIn = null,
}) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  // Redirect if logged in but route is public-only
  if (isAuthenticated && redirectToIfLoggedIn) {
    return <Navigate to={redirectToIfLoggedIn} replace />;
  }

  // Redirect if not logged in but route is private
  if (!isAuthenticated && redirectToIfNotLoggedIn) {
    return <Navigate to={redirectToIfNotLoggedIn} replace />;
  }

  return children;
};

export default ProtectedRoute;
