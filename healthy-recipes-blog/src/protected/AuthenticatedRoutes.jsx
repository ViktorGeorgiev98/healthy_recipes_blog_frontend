import { useAuth } from "../context/AuthenticationContext";
import { Navigate, Outlet } from "react-router-dom";

export default function AuthenticatedRoutes() {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/home" replace />;
  }

  return <Outlet />;
}
