import { NavLink } from "react-router-dom";
import Logo from "./Logo";

export default function NavBar() {
  return (
    <div className="pr-10 pl-1 w-full bg-yellow-500 flex items-center justify-between">
      <NavLink to="home">
        <Logo />
      </NavLink>
      <nav>
        <ul className="flex items-center justify-evenly gap-10">
          <li>Hello User</li>
          <li>
            <NavLink className="text-lg" to="recipes">
              Recipes
            </NavLink>
          </li>
          <li>
            <NavLink to="register">Register</NavLink>
          </li>
          <li>
            <NavLink to="login">Login</NavLink>
          </li>
          <li>
            <NavLink to="add-recipe">Add Recipe</NavLink>
          </li>
          <li>
            <NavLink to="about">About</NavLink>
          </li>
          <li>
            <NavLink to="logout">Logout</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
