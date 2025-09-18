import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; 

const ProtectedRoute = ({
  children,
  redirectToIfNotLoggedIn = null,
  redirectToIfLoggedIn = null,
}) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) return <div>Loading...</div>;


  if (isAuthenticated && redirectToIfLoggedIn) {
    return <Navigate to={redirectToIfLoggedIn} replace />;
  }

  if (!isAuthenticated && redirectToIfNotLoggedIn) {
    return <Navigate to={redirectToIfNotLoggedIn} replace />;
  }

  return children;
};

export default ProtectedRoute;
