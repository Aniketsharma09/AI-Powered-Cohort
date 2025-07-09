import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { recipeContext } from "../Contexts/RecipeContext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useState } from "react";

const RecipeDetails = () => {
  const navigate = useNavigate();
  const param = useParams();
  const { recipeData, setRecipeData } = useContext(recipeContext);

  // Ensure recipe exists
  const recipe = recipeData.find((re) => re.id == param.id);
  const index = recipeData.findIndex((rec) => rec.id == param.id);

  useEffect(() => {}, []);
  const [fav, setFav] = useState(JSON.parse(localStorage.getItem("fav")) || []);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: recipe?.name,
      chefName: recipe?.chefName,
      imgurl: recipe?.imgurl,
      dis: recipe?.dis,
      ing: recipe?.ing,
      ins: recipe?.ins,
    },
  });

  const submitHandler = (data) => {
    data.id = recipe.id; // Ensure ID stays the same
    const copyData = [...recipeData];
    copyData[index] = data;
    setRecipeData(copyData);
    localStorage.setItem("recipe", JSON.stringify(copyData));

    toast.success("Recipe updated successfully!");
    // RecipeDetails();
  };

  // localStorage.clear()
  const deleteRecipe = () => {
    // delete the recipe
    const updatedRecipe = recipeData.filter((rec) => rec.id != recipe.id);
    setRecipeData(updatedRecipe);
    localStorage.setItem("recipe", JSON.stringify(updatedRecipe));

    // delete the recipe also from favourite
    const delFav = fav.filter((fav) => fav.id !== recipe.id);
    setFav(delFav);
    localStorage.setItem("fav", JSON.stringify(delFav));
    toast.success("Recipe deleted successfully!");
    navigate("/recipes");
  };
  const remFav = () => {
    const updatedFav = fav.filter((f) => f.id !== recipe?.id);
    setFav(updatedFav);
    localStorage.setItem("fav", JSON.stringify(updatedFav));
  };
  const addFav = () => {
    const copyFav = [...fav];
    copyFav.push(recipe);
    console.log(recipe);
    console.log(copyFav);
    setFav(copyFav);
    localStorage.setItem("fav", JSON.stringify(copyFav));
  };

  return (
    <div className="w-full h-fit flex">
      <div className="left w-1/2 h-full p-2 flex flex-col items-center">
        <div className="relative flex justify-between w-full items-center">
          <h1 className="mt-2 text-4xl text-[var(--logo-color)] ">
            {recipe?.name}
          </h1>
          <div>
            {fav.find((f) => f.id === recipe?.id) ? (
              <i
                onClick={remFav}
                className="absolute top-4 right-4 text-4xl ri-heart-fill text-red-500"
              ></i>
            ) : (
              <i
                onClick={addFav}
                className="absolute top-4 right-4 text-4xl ri-heart-line text-black"
              ></i>
            )}
          </div>
        </div>

        <img
          className="w-[97%] h-80 object-cover rounded-xl mt-5"
          src={recipe?.imgurl}
        />
        <h2 className="self-baseline mt-2 text-xl text-[var(--subheading-color)]">
          Chef Name: {recipe?.chefName}
        </h2>
        <h2 className="self-baseline mt-2 text-xl text-[var(--subheading-color)]">
          Description:
        </h2>
        <h3 className="mt-2 text-md text-justify">{recipe?.dis}</h3>
        <h2 className="self-baseline mt-2 text-xl text-[var(--subheading-color)]">
          Ingredients:
        </h2>
        <h3 className="mt-2 text-md text-justify">{recipe?.ing}</h3>
        <h2 className="self-baseline mt-2 text-xl text-[var(--subheading-color)]">
          How To Cook:
        </h2>
        <h3 className="mt-2 text-md text-justify">{recipe?.ins}</h3>
      </div>

      <form
        className="flex flex-col gap-2 w-1/2 p-3"
        onSubmit={handleSubmit(submitHandler)}
      >
        <h1 className="mt-2 text-3xl text-center text-[var(--heading-color)]">
          Update Recipe Details
        </h1>
        <h3 className="text-xl text-[var(--subheading-color)]">Recipe Name </h3>
        <input
          {...register("name")}
          className="px-5 py-3 text-xl border rounded-sm"
          type="text"
          placeholder="Enter Recipe Name"
        />
        <h3 className="text-xl text-[var(--subheading-color)]">Chef Name </h3>
        <input
          {...register("chefName")}
          className="px-5 py-3 text-xl border rounded-sm"
          type="text"
          placeholder="Enter Chef Name"
        />{" "}
        <h3 className="text-xl text-[var(--subheading-color)]">Image Url </h3>
        <input
          {...register("imgurl")}
          className="px-5 py-3 text-xl border rounded-sm"
          type="url"
          placeholder="Enter Recipe Image Url"
        />
        <h3 className="text-xl text-[var(--subheading-color)]">
          Recipe Discription{" "}
        </h3>
        <textarea
          {...register("dis")}
          className="px-5 py-3 text-xl border rounded-sm h-[20vh]"
          placeholder="Recipe Description"
        />
        <h3 className="text-xl text-[var(--subheading-color)]">
          Required Ingredients for recipe{" "}
        </h3>
        <textarea
          {...register("ing")}
          className="px-5 py-3 text-xl border rounded-sm h-[20vh]"
          placeholder="Ingredients (comma-separated)"
        />
        <h3 className="text-xl text-[var(--subheading-color)]">
          Instructions for making recipe
        </h3>
        <textarea
          {...register("ins")}
          className="px-5 py-3 text-xl border rounded-sm h-[20vh]"
          placeholder="Instructions (one per line)"
        />
        <div className="w-full gap-2 flex">
          <button className="w-1/2 bg-[var(--btn-update)] hover:bg-[var(--btn-update-hover)] text-white px-5 py-3 rounded-md shadow-md transition-all duration-200 active:scale-95">
            Update Recipe
          </button>

          <button
            type="button"
            onClick={deleteRecipe}
            className="w-1/2 bg-[var(--btn-delete)] hover:bg-[var(--btn-delete-hover)] text-white px-5 py-3 rounded-md shadow-md transition-all duration-200 active:scale-95"
          >
            Delete Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default RecipeDetails;
