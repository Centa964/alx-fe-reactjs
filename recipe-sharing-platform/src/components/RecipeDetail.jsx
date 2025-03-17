import React from 'react';

const RecipeDetail = ({ recipe }) => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold my-8">{recipe.title}</h1>
      <div className="flex justify-center">
        <img src={recipe.image} alt={recipe.title} className="w-1/2" />
      </div>
      <div className="my-8">
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