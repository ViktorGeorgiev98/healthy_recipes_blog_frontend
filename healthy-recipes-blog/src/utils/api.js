import { use } from "react";
import { APIURL } from "./constants";

export const getNewestRecipes = async () => {
  const response = await fetch(
    `${APIURL}/recipes/?limit=6&offset=0&order_by=created_at`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch recipes");
  }
  const data = await response.json();
  return data;
};

export const getMostLikedRecipes = async () => {
  const response = await fetch(
    `${APIURL}/recipes/?limit=6&offset=0&order_by=likes`
  );
  const data = await response.json();
  return data;
};

export const registerUser = async ({ email, password }) => {
  const response = await fetch(`${APIURL}/users/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();
  console.log(data);
  if (!response.ok) {
    const errorMsg =
      data?.detail?.[0]?.msg || data.message || data.detail || "Unknown error";
    throw new Error(errorMsg);
  }

  return data;
};

export const getRecipeById = async (id) => {
  const response = await fetch(`${APIURL}/recipes/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch recipe");
  }
  const data = await response.json();
  return data;
};

export const loginUser = async ({ username, password }) => {
  const formData = new URLSearchParams();
  formData.append("grant_type", "password");
  formData.append("username", username);
  formData.append("password", password);
  const response = await fetch(`${APIURL}/users/login`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" }, // Changed to x-www-form-urlencoded, required for login from the server fast api app
    body: formData,
  });
  const data = await response.json();
  if (!response.ok) {
    const errorMsg =
      data?.detail?.[0]?.msg || data.message || data.detail || "Unknown error";
    throw new Error(errorMsg);
  }
  return data;
};

export const createRecipe = async (recipeData) => {
  const formData = new FormData();
  formData.append("title", recipeData.title);
  formData.append("ingredients", recipeData.ingredients);
  formData.append("description", recipeData.description);
  formData.append("image", recipeData.image);
  const response = await fetch(`${APIURL}/recipes/`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: formData,
  });

  if (!response.ok) {
    const data = await response.json();
    const errorMsg =
      data?.detail?.[0]?.msg || data.message || data.detail || "Unknown error";
    throw new Error(errorMsg);
  }
  const newRecipe = await response.json();
  return await newRecipe;
};
