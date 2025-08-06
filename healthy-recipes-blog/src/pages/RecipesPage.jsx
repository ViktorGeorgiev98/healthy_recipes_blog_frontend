import { useQuery } from "@tanstack/react-query";
import {
  getNewestRecipes,
  getNewestRecipesWithPagination,
  getRecipesWithQuery,
} from "../utils/api";
import Spinner from "../components/Spinner";
import RecipeCard from "../components/RecipeCard";
import NewestRecipes from "../sections/NewestRecipes";
import Button from "../components/Button";
import { useState } from "react";
import { launchAlertCenteredWithFadeInDown } from "../utils/alert";

export default function RecipesPage() {
  const itemsPerPage = 6;
  const [page, setPage] = useState(1);
  const offset = (page - 1) * itemsPerPage;
  const recipesSeen = page * itemsPerPage;
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const { data, isLoading, error } = useQuery({
    queryKey: ["recipes", page],
    queryFn: () => getNewestRecipesWithPagination(offset),
    keepPreviousData: true,
  });

  if (error) return <div>Error loading recipes</div>;

  if (isLoading) {
    return <Spinner />;
  }

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) {
      launchAlertCenteredWithFadeInDown(
        "fail",
        "Search Error",
        "Please enter a search term."
      );
      return;
    }
    const results = await getRecipesWithQuery(query);
    if (results.length === 0) {
      launchAlertCenteredWithFadeInDown(
        "fail",
        "No Results Found",
        "No recipes match your search criteria."
      );
      return;
    }
    console.log("Search Results:", results);
    setSearchResults(results);
    setQuery("");
  };

  const clearSearch = () => {
    setSearchResults([]);
    setQuery("");
  };

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
        <form onSubmit={handleSearch} className="flex flex-col gap-6">
          <input
            className="border border-black rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full"
            type="text"
            placeholder="Search recipe ..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
          />
          <div
            id="search-form-buttons"
            className="flex items-center justify-start gap-12"
          >
            <Button type="submit" buttonType="secondary">
              Search
            </Button>
            <Button
              type="button"
              buttonType="secondary"
              onClick={() => clearSearch()}
            >
              Clear Search
            </Button>
          </div>
        </form>
        <h2 className="text-2xl font-bold uppercase tracking-widest italic text-yellow-500 hover:rotate-5 transition-all duration-300">
          {searchResults.length > 0 ? "Search Results" : "Our Newest Recipes"}
        </h2>
        <div className="grid grid-cols-3 gap-20 justify-items-start">
          {(searchResults.length > 0 ? searchResults : data).map((recipe) => (
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
        {page > 1 && searchResults.length <= 0 && (
          <Button
            type="secondary"
            onClick={() => setPage((prevPage) => prevPage - 1)}
          >
            Previous Page
          </Button>
        )}
        {data.length >= 6 && searchResults.length <= 0 && (
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
