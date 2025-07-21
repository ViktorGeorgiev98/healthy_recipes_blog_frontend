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
  console.log(data);
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
