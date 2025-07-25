import { useAuth } from "../context/AuthenticationContext";
import { Navigate, Outlet } from "react-router-dom";

export default function GuestRoutes({ children }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
