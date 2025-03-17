import { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};

    if (!title.trim()) {
      newErrors.title = "Title is required";
    }
    if (!ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required";
    } else if (ingredients.split(",").length < 2) {
      newErrors.ingredients = "At least 2 ingredients are required";
    }
    if (!steps.trim()) {
      newErrors.steps = "Preparation Steps required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("New Recipe:", { title, ingredients, steps });
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded">
      <h2 className="text-2xl font-bold text-center mb-4">Add New Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2">Recipe Title:</label>
          <input
            type="text"
            className="w-full border p-2 mb-4"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          {errors.title && <p className="text-red-500">{errors.title}</p>}
        </div>

        <div>
          <label className="block mb-2">Ingredients:</label>
          <textarea
            className="w-full border p-2 mb-4"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            required
          ></textarea>
          {errors.ingredients && <p className="text-red-500">{errors.ingredients}</p>}
        </div>

        <div>
          <label className="block mb-2">Preparation Steps:</label>
          <textarea
            className="w-full border p-2 mb-4"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            required
          ></textarea>
          {errors.steps && <p className="text-red-500">{errors.steps}</p>}
        </div>

        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
