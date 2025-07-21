import { useEffect } from "react";
import { useNavigate } from "react-router";
import { removeLocalStorageLogout } from "../utils/localStorage";

export default function LogoutPage() {
  const navigate = useNavigate();

  useEffect(() => {
    removeLocalStorageLogout();
    navigate("/login");
  }, [navigate]);

  return null; // Nothing to render
}
