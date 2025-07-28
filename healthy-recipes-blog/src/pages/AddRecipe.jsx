import { useState } from "react";
import { motion } from "framer-motion";
import Button from "../components/Button";
import { launchAlertCenteredWithFadeInDown } from "../utils/alert";
import { useMutation } from "@tanstack/react-query";
import { createRecipe } from "../utils/api";
import { useNavigate } from "react-router";
import Spinner from "../components/Spinner";

export default function AddRecipe() {
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    description: "",
    image: null,
  });
  const navigate = useNavigate();

  const {
    mutate: addRecipe,
    isLoading,
    isError,
    error,
  } = useMutation({
    mutationFn: createRecipe,
    onSuccess: () => {
      launchAlertCenteredWithFadeInDown(
        "success",
        "Recipe Added Successfully",
        "Your recipe has been added!"
      );
      navigate("/home");
    },
    onError: (error) => {
      launchAlertCenteredWithFadeInDown(
        "fail",
        "Failed to Add Recipe",
        error.message || "An error occurred while adding the recipe."
      );
    },
  });

  const handleChange = (e) => {
    const { name, value, files, type } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] }); // Handle file upload
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validateInput = () => {
    if (
      !formData.title ||
      !formData.ingredients ||
      !formData.description ||
      !formData.image
    ) {
      launchAlertCenteredWithFadeInDown(
        "fail",
        "All fields are mandatory!",
        "Please fill in all fields."
      );
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateInput()) {
      return;
    }
    const newRecipe = await addRecipe({
      title: formData.title,
      ingredients: formData.ingredients,
      description: formData.description,
      image: formData.image,
    });
    // setFormData({
    //   title: "",
    //   ingredients: "",
    //   description: "",
    //   image: null,
    // });
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-green-100 px-4"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md">
        <h2 className="text-3xl font-bold text-yellow-500 text-center mb-6">
          Add New Recipe
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="relative">
            <input
              type="input"
              name="title"
              id="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Title"
              className="peer placeholder-transparent border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full"
            />
            <label
              htmlFor="title"
              className="
                absolute left-4 text-gray-500 text-sm 
                transition-all 
                -top-5 text-yellow-500 text-sm
                peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                peer-focus:-top-5 peer-focus:text-yellow-500 peer-focus:text-sm
                pointer-events-none
                "
            >
              Title
            </label>
          </div>
          <div className="relative">
            <input
              type="input"
              name="ingredients"
              id="ingredients"
              value={formData.ingredients}
              onChange={handleChange}
              placeholder="Ingredients"
              className="peer placeholder-transparent border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full"
            />
            <label
              htmlFor="ingredients"
              className="
                absolute left-4 text-gray-500 text-sm 
                transition-all 
                -top-5 text-yellow-500 text-sm
                peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                peer-focus:-top-5 peer-focus:text-yellow-500 peer-focus:text-sm
                pointer-events-none
                "
            >
              Ingredients
            </label>
          </div>
          <div className="relative">
            <input
              type="input"
              name="description"
              id="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Description"
              className="peer placeholder-transparent border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full"
            />
            <label
              htmlFor="description"
              className="
                absolute left-4 text-gray-500 text-sm 
                transition-all 
                -top-5 text-yellow-500 text-sm
                peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                peer-focus:-top-5 peer-focus:text-yellow-500 peer-focus:text-sm
                pointer-events-none
                "
            >
              Description
            </label>
          </div>
          <div className="relative">
            <input
              type="file"
              name="image"
              id="image"
              onChange={handleChange}
              placeholder="Image"
              className="peer placeholder-transparent border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full"
            />
            <label
              htmlFor="image"
              className="
                absolute left-4 text-gray-500 text-sm 
                transition-all 
                -top-5 text-yellow-500 text-sm
                peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                peer-focus:-top-5 peer-focus:text-yellow-500 peer-focus:text-sm
                pointer-events-none
                "
            >
              Upload Image
            </label>
          </div>
          <Button
            type="submit"
            className="bg-yellow-500 text-white font-semibold py-2 rounded-md hover:bg-yellow-600 transition-colors"
          >
            Submit Recipe
          </Button>
        </form>
      </div>
    </motion.div>
  );
}
