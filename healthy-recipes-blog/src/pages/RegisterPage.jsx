import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { launchAlertCenteredWithFadeInDown } from "../utils/alert";
import { APIURL } from "../utils/constants";
import { useMutation } from "@tanstack/react-query";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const validateInput = () => {
    if (!formData.email || !formData.password || !formData.confirmPassword) {
      setError("All fields are mandatory!");
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      launchAlertCenteredWithFadeInDown(
        "fail",
        "Password and Confirm password do not match!",
        "You must have matching passwords!"
      );
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const inputIsValid = validateInput();
    if (inputIsValid) {
      const response = await fetch(`${APIURL}/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password, // don't send confirmPassword
        }),
      });
      const data = await response.json();
      console.log(data);
      if (response.status !== 201) {
        const errorMsg =
          data?.detail?.[0]?.msg ||
          data.message ||
          data.detail ||
          "Unknown error";
        launchAlertCenteredWithFadeInDown("fail", response.status, errorMsg);
        return;
      }
      console.log({ data });
      launchAlertCenteredWithFadeInDown(
        "success",
        "Registration Successful",
        "You can now log in with your new account!"
      );
      navigate("/login");
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
          Create Account
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

          {/* Confirm Password input with floating label */}
          <div className="relative">
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Repeat Password"
              className="peer placeholder-transparent border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full"
            />
            <label
              htmlFor="confirmPassword"
              className="
                absolute left-4 text-gray-500 text-sm 
                transition-all 
                -top-5 text-yellow-500 text-sm
                peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                peer-focus:-top-5 peer-focus:text-yellow-500 peer-focus:text-sm
                pointer-events-none
                "
            >
              Repeat Password
            </label>
          </div>

          {error && <p className="text-red-500 text-xl text-center">{error}</p>}

          <Button
            type="submit"
            className="bg-yellow-500 text-white font-semibold py-2 rounded-md hover:bg-yellow-600 transition-colors"
          >
            Register
          </Button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <span
            className="text-yellow-500 font-semibold cursor-pointer hover:underline"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </div>
    </motion.div>
  );
}
