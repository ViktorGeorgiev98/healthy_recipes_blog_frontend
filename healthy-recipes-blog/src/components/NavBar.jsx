import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { useAuth } from "../context/AuthenticationContext";

export default function NavBar() {
  const { userEmail, isAuthenticated } = useAuth();
  return (
    <div className="pr-10 pl-1 w-full bg-green-300 flex items-center justify-between">
      <NavLink to="home">
        <Logo />
      </NavLink>
      <nav>
        <ul className="flex items-center justify-evenly gap-10">
          <li className="text-2xl italic text-green-950 font-semibold hover:underline transition-all duration-300 cursor-pointer hover:text-yellow-600">
            {isAuthenticated && userEmail
              ? `Welcome, ${userEmail}`
              : "Guest User"}
          </li>
          <li>
            <NavLink
              className="text-2xl italic text-green-950 font-semibold hover:underline transition-all duration-300 cursor-pointer hover:text-yellow-600"
              to="recipes"
            >
              Recipes
            </NavLink>
          </li>
          {!isAuthenticated && (
            <>
              <li>
                <NavLink
                  className="text-2xl italic text-green-950 font-semibold hover:underline transition-all duration-300 cursor-pointer hover:text-yellow-600"
                  to="register"
                >
                  Register
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-2xl italic text-green-950 font-semibold hover:underline transition-all duration-300 cursor-pointer hover:text-yellow-600"
                  to="login"
                >
                  Login
                </NavLink>
              </li>
            </>
          )}
          {isAuthenticated && (
            <>
              <li>
                <NavLink
                  className="text-2xl italic text-green-950 font-semibold hover:underline transition-all duration-300 cursor-pointer hover:text-yellow-600"
                  to="add-recipe"
                >
                  Add Recipe
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-2xl italic text-green-950 font-semibold hover:underline transition-all duration-300 cursor-pointer hover:text-yellow-600"
                  to="logout"
                >
                  Logout
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}
