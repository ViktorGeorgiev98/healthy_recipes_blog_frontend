import { useAuth } from "../context/AuthenticationContext";
import { Navigate, useNavigate } from "react-router-dom";

export default function GuestRoutes({ children }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  if (!isAuthenticated) {
    return navigate("/login", { replace: true });
  }

  return <>{children}</>;
}
