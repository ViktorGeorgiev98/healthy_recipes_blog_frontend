import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Spinner from "./Spinner";
import { APIURL } from "../utils/constants";
import Button from "./Button";
import { getRecipeById } from "../utils/api";
import { useAuth } from "../context/AuthenticationContext";
import { launchAlertCenteredWithFadeInDown } from "../utils/alert";

export default function RecipeCardDetailed({ id }) {
  const queryClient = useQueryClient();
  const { isAuthenticated, userId } = useAuth();

  const {
    data: recipe,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["recipe", id],
    queryFn: () => getRecipeById(id),
  });

  // UseMutation now takes a config object with mutationFn and options
  const likeMutation = useMutation({
    mutationFn: () =>
      fetch(`${APIURL}/recipes/${id}/like`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ recipeId: id }),
      }).then(async (res) => {
        const data = await res.json();
        if (!res.ok) {
          // Throw error to be caught in onError
          throw data;
        }
        return data;
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["recipe", id] });
      launchAlertCenteredWithFadeInDown(
        "success",
        "Success",
        "Recipe liked successfully!"
      );
    },
    onError: (error) => {
      launchAlertCenteredWithFadeInDown(
        "fail",
        "Error",
        error?.detail ||
          error?.error ||
          "An error occurred while liking the recipe."
      );
    },
  });

  const handleLike = () => {
    likeMutation.mutate();
  };

  if (isLoading) return <Spinner />;
  if (error) return <div>Error loading recipe</div>;

  return (
    <>
      <img
        src={`${APIURL}${recipe.image_path}`}
        alt={recipe.title}
        className="w-full h-60 object-cover"
      />
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
          {isAuthenticated && recipe.owner_id !== userId ? (
            <Button
              className="bg-yellow-500 text-white font-semibold py-2 rounded-md hover:bg-yellow-600 transition-colors"
              onClick={handleLike}
              buttonType="secondary"
              disabled={likeMutation.isLoading}
            >
              {likeMutation.isLoading ? "Liking..." : "Like"}
            </Button>
          ) : (
            <p>
              You need to be logged in to like and must not be the owner of the
              recipe in order to like it.
            </p>
          )}
        </div>
      </div>
    </>
  );
}
