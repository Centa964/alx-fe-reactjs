import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch('/src/data.json')
      .then((response) => response.json())
      .then((data) => {
        const selectedRecipe = data.find((item) => item.id === parseInt(id, 10));
        setRecipe(selectedRecipe);
      })
      .catch((error) => console.error('Error Loading Recipe:', error));
  }, [id]);

  if (!recipe) {
    return <div className="text-center">Loading recipe...</div>;
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold my-8">{recipe.title}</h1>
      <div className="flex justify-center">
        <img src={recipe.image} alt={recipe.title} className="w-1/2" />
      </div>
      <div className="my-8 shadow-lg"> 
        <h2 className="text-2xl font-bold">Ingredients</h2>
        <ul className="list-disc ml-8">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <div className="my-8">
        <h2 className="text-2xl font-bold">Instructions</h2>
        <ol className="list-decimal ml-8">
          {recipe.instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetail;