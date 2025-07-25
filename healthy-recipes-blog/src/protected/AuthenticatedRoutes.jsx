import { useAuth } from "../context/AuthenticationContext";
import { Navigate, useNavigate } from "react-router-dom";

export default function AuthenticatedRoutes({ children }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  if (isAuthenticated) {
    return navigate("/home", { replace: true });
  }

  return <>{children}</>;
}
