import { NavLink } from "react-router-dom";
import Logo from "./Logo";

export default function NavBar() {
  return (
    <div className="pr-10 pl-1 w-full bg-yellow-400 flex items-center justify-between">
      <NavLink to="home">
        <Logo />
      </NavLink>
      <nav>
        <ul className="flex items-center justify-evenly gap-10">
          <li className="text-xl italic text-green-950 font-semibold hover:underline transition-all duration-1000 cursor-pointer hover:text-black">
            Hello User
          </li>
          <li>
            <NavLink
              className="text-xl italic text-green-950 font-semibold hover:underline transition-all duration-1000 cursor-pointer hover:text-black"
              to="recipes"
            >
              Recipes
            </NavLink>
          </li>
          <li>
            <NavLink
              className="text-xl italic text-green-950 font-semibold hover:underline transition-all duration-1000 cursor-pointer hover:text-black"
              to="register"
            >
              Register
            </NavLink>
          </li>
          <li>
            <NavLink
              className="text-xl italic text-green-950 font-semibold hover:underline transition-all duration-1000 cursor-pointer hover:text-black"
              to="login"
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              className="text-xl italic text-green-950 font-semibold hover:underline transition-all duration-1000 cursor-pointer hover:text-black"
              to="add-recipe"
            >
              Add Recipe
            </NavLink>
          </li>
          <li>
            <NavLink
              className="text-xl italic text-green-950 font-semibold hover:underline transition-all duration-1000 cursor-pointer hover:text-black"
              to="about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className="text-xl italic text-green-950 font-semibold hover:underline transition-all duration-500 cursor-pointer hover:text-black"
              to="logout"
            >
              Logout
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
