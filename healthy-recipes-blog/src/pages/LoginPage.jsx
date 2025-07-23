import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { launchAlertCenteredWithFadeInDown } from "../utils/alert";
import { APIURL } from "../utils/constants";
import { useMutation } from "@tanstack/react-query";
import { useAuth } from "../context/AuthenticationContext";
import { loginUser } from "../utils/api";

export default function LoginPage() {
  const { login: setLocalStorage } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateInput = () => {
    if (!formData.email || !formData.password) {
      launchAlertCenteredWithFadeInDown(
        "fail",
        "All fields are required!",
        "Please fill in all fields."
      );
      return false;
    }
    return true;
  };

  const {
    mutate: login,
    isLoading,
    isError,
    error,
  } = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      setLocalStorage(data.user);
      launchAlertCenteredWithFadeInDown(
        "success",
        "Login Successful",
        "Welcome back!"
      );
      navigate("/home");
    },
    onError: (error) => {
      launchAlertCenteredWithFadeInDown("fail", "Login Failed", error.message);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const inputIsValid = validateInput();
    if (inputIsValid) {
      const data = await login({
        username: formData.email,
        password: formData.password,
      });
    }
  };

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-green-100 px-4"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md">
        <h2 className="text-3xl font-bold text-yellow-500 text-center mb-6">
          Login to your account
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Email input with floating label */}
          <div className="relative">
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="peer placeholder-transparent border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full"
            />
            <label
              htmlFor="email"
              className="
                absolute left-4 text-gray-500 text-sm 
                transition-all 
                -top-5 text-yellow-500 text-sm
                peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                peer-focus:-top-5 peer-focus:text-yellow-500 peer-focus:text-sm
                pointer-events-none
                "
            >
              Email
            </label>
          </div>

          {/* Password input with floating label */}
          <div className="relative">
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="peer placeholder-transparent border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full"
            />
            <label
              htmlFor="password"
              className="
                absolute left-4 text-gray-500 text-sm 
                transition-all 
                -top-5 text-yellow-500 text-sm
                peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                peer-focus:-top-5 peer-focus:text-yellow-500 peer-focus:text-sm
                pointer-events-none
                "
            >
              Password
            </label>
          </div>

          <Button
            type="submit"
            className="bg-yellow-500 text-white font-semibold py-2 rounded-md hover:bg-yellow-600 transition-colors"
          >
            Login
          </Button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          You do not have an account?{" "}
          <span
            className="text-yellow-500 font-semibold cursor-pointer hover:underline"
            onClick={() => navigate("/register")}
          >
            Register
          </span>
        </p>
      </div>
    </motion.div>
  );
}
