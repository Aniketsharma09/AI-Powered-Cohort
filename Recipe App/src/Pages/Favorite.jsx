import Recipe from "./RecipeCart";

function Favorite() {
  const fav = JSON.parse(localStorage.getItem('fav')) || [];
  const renderCat = fav.map((recipe) => <Recipe key={recipe.id} value={recipe} /> )
  return <div className="flex gap-5 flex-wrap mt-5">{renderCat}</div>;
} 
export default Favorite