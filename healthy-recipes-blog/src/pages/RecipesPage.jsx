import { useQuery } from "@tanstack/react-query";
import { getNewestRecipes, getNewestRecipesWithPagination } from "../utils/api";
import Spinner from "../components/Spinner";
import RecipeCard from "../components/RecipeCard";
import NewestRecipes from "../sections/NewestRecipes";
import Button from "../components/Button";

export default function RecipesPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["recipes"],
    queryFn: getNewestRecipesWithPagination,
  });

  if (error) return <div>Error loading recipes</div>;

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div id="recipes-page" className="bg-white">
      <h2 className="text-2xl font-bold uppercase tracking-widest italic text-yellow-500 hover:rotate-5 transition-all duration-300 flex items-center justify-center pt-10 flex-col gap-10">
        Browse Our Recipes
      </h2>
      <section
        id="newest-recipes"
        className="py-20 flex flex-col items-center justify-center gap-20 w-full bg-white"
      >
        <h2 className="text-2xl font-bold uppercase tracking-widest italic text-yellow-500 hover:rotate-5 transition-all duration-300">
          Our Newest Recipes
        </h2>
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
      <div
        id="pagination-buttons"
        className="flex items-center justify-start gap-12"
      >
        <Button type="secondary">Previous</Button>
        
      </div>
    </div>
  );
}
