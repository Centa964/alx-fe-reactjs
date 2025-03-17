import { useState, useEffect } from "react";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('src/data.json')
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => {
        console.error('Error Loading Data:', error);
      });
  }, []);

 return (
    <div className="p-4">
      <h1 className="font-semibold text-center text-3xl text-green-500">Recipe Sharing Platform</h1>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {recipes.map((recipe) => (
          <li className="shadow-md hover:shadow-xl hover:scale-100 transition-transform duration-200" key={recipe.id}>
            <h2 className="text-xl font-medium mt-2">{recipe.name}</h2>
            <p className="mt-1 text-green-950">{recipe.description}</p>
            <img className="w-full h-40 object-cover rounded" src="recipe.image" alt="recipe.title" />
          </li>
        ))}
      </ul>
    </div>
  )};

export default HomePage;
