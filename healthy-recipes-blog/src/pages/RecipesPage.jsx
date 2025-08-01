import { useQuery } from "@tanstack/react-query";
import { getNewestRecipes, getNewestRecipesWithPagination } from "../utils/api";
import Spinner from "../components/Spinner";
import RecipeCard from "../components/RecipeCard";
import NewestRecipes from "../sections/NewestRecipes";
import Button from "../components/Button";
import { useState } from "react";

export default function RecipesPage() {
  const itemsPerPage = 6;
  const [page, setPage] = useState(1);
  const offset = (page - 1) * itemsPerPage;
  const recipesSeen = page * itemsPerPage;

  const { data, isLoading, error } = useQuery({
    queryKey: ["recipes", page],
    queryFn: () => getNewestRecipesWithPagination(offset),
    keepPreviousData: true,
  });

  if (error) return <div>Error loading recipes</div>;

  if (isLoading) {
    return <Spinner />;
  }

  // const maxRecipes = data?.length || 0;

  return (
    <div
      id="recipes-page"
      className="bg-white flex flex-col items-center justify-center gap-10 pb-10"
    >
      <h2 className="text-2xl font-bold uppercase tracking-widest italic text-yellow-500 hover:rotate-5 transition-all duration-300 flex items-center justify-center pt-10">
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
              likes={recipe.likes}
              ingredients={recipe.ingredients}
            />
          ))}
        </div>
      </section>
      <div
        id="pagination-buttons"
        className="flex items-center justify-start gap-12"
      >
        {page > 1 && (
          <Button
            type="secondary"
            onClick={() => setPage((prevPage) => prevPage - 1)}
          >
            Previous Page
          </Button>
        )}
        {data.length >= 6 && (
          <Button
            type="primary"
            onClick={() => setPage((prevPage) => prevPage + 1)}
          >
            Next Page
          </Button>
        )}
      </div>
    </div>
  );
}
