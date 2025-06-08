import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Recipe from "../Pages/RecipeCart";
import Create from "../Pages/Create";
import Favorite from "../Pages/Favorite";
import RecipeDetails from "../Pages/RecipeDetails";
import Recipes from "../Pages/Recipes";

const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipes" element={<Recipes/>}/>
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/home/recipe-detail/:id" element={<RecipeDetails />} />
        <Route path="/add-recipe" element={<Create />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
    </div>
  );
};

export default MainRoute;
