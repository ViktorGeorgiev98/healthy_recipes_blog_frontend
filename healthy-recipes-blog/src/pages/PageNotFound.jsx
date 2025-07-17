import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

export default function PageNotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md text-center bg-white p-10 rounded-xl shadow-lg">
        <h1 className="text-9xl font-extrabold text-yellow-500">404</h1>
        <h2 className="text-3xl font-semibold mt-4 mb-2 text-gray-700">
          Page Not Found
        </h2>
        <p className="text-gray-700 mb-6">
          Sorry, the page you’re looking for doesn’t exist or has been moved.
        </p>
        <Button type="secondary" onClick={() => navigate("/home")}>
          Go Home
        </Button>
      </div>
    </div>
  );
}
