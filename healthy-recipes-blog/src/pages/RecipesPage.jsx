import { useQuery } from "@tanstack/react-query";
import { getNewestRecipes } from "../utils/api";
import Spinner from "../components/Spinner";
import RecipeCard from "../components/RecipeCard";
import NewestRecipes from "../sections/NewestRecipes";

export default function RecipesPage() {
  return (
    <div id="recipes-page" className="bg-white">
      <h2 className="text-2xl font-bold uppercase tracking-widest italic text-yellow-500 hover:rotate-5 transition-all duration-300 flex items-center justify-center pt-10">
        Browse Our Recipes
      </h2>
      <NewestRecipes />
    </div>
  );
}
