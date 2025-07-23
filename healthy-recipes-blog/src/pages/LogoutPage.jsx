import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthenticationContext";

export default function LogoutPage() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  useEffect(() => {
    logout();
    navigate("/login");
  }, [navigate]);

  return null; // Nothing to render
}
