import Spinner from "../components/Spinner";
import { useQuery } from "@tanstack/react-query";
import { APIURL } from "../utils/constants";
import RecipeCard from "../components/RecipeCard";
import Button from "../components/Button";
import { getNewestRecipes } from "../utils/api";

export default function NewestRecipes() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["recipes"],
    queryFn: getNewestRecipes,
  });

  if (isLoading) return <Spinner />;
  if (error) return <div>Error loading recipes</div>;
  return (
    <section
      id="newest-recipes"
      className="py-20 flex flex-col items-center justify-center gap-20 w-full bg-white"
    >
      <h1 className="text-3xl font-bold uppercase tracking-widest italic text-yellow-500 hover:rotate-5 transition-all duration-300">
        Our Newest Recipes
      </h1>
      <div className="grid grid-cols-3 gap-20 justify-items-start">
        {data.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            title={recipe.title}
            description={recipe.description}
            image={recipe.image_path}
            id={recipe.id}
          />
        ))}
      </div>
    </section>
  );
}
