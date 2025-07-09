import { useContext } from "react";
import { recipeContext } from "../Contexts/RecipeContext";
import Recipe from "./RecipeCart";

const Recipes = () => {
  const { recipeData } = useContext(recipeContext);
  const renderCat = recipeData.map((recipe) => <Recipe key={recipe.id} value={recipe} /> )
console.log(recipeData);

  return <div className="flex gap-5 flex-wrap mt-5">{renderCat}</div>;
}

export default Recipes