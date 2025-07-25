import { useQuery } from "@tanstack/react-query";
import Spinner from "./Spinner";
import { APIURL } from "../utils/constants";
import Button from "./Button";
import { getRecipeById } from "../utils/api";

export default function RecipeCardDetailed({ id }) {
  const {
    data: recipe,
    isLoading,
    error,
  } = useQuery({ queryKey: ["recipe", id], queryFn: () => getRecipeById(id) });

  if (isLoading) {
    return <Spinner />;
  }

  if (error) return <div>Error loading recipes</div>;

  return (
    <>
      <img
        src={`${APIURL}${recipe.image_path}`}
        alt={recipe.title}
        className="w-full h-60 object-cover"
      />

      {/* Content below image: centered with padding */}
      <div className="p-6 flex flex-col items-center text-center gap-8">
        <h3 className="text-2xl font-bold text-gray-800">
          Title: {recipe.title}
        </h3>
        <p className="text-gray-600 text-sm">
          Ingredients: {recipe.ingredients}
        </p>
        <p className="text-gray-600 text-sm">
          Description: {recipe.description}
        </p>
        <p className="text-gray-600 text-sm">Likes: {recipe.likes}</p>
        <div className="flex justify-center items-center gap-10">
          <Button
            className="bg-yellow-500 text-white font-semibold py-2 rounded-md hover:bg-yellow-600 transition-colors"
            onClick={() => console.log("Liked recipe!")}
            buttonType="secondary"
          >
            Like
          </Button>
        </div>
      </div>
    </>
  );
}
