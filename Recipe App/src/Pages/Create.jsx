import { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipeContext } from "../Contexts/RecipeContext";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
const Create = () => {
  const navigate = useNavigate();
  const { recipeData, setRecipeData } = useContext(recipeContext);
  const { register, handleSubmit, reset } = useForm();
  const submitHandler = (data) => {
    data.id = nanoid();
    const copyData = [...recipeData];
    const newData = [...copyData, data];
    setRecipeData(newData);
    localStorage.setItem("recipe", JSON.stringify(newData));
    reset();
    navigate("/recipes");
  };
  return (
    <div className="bbg-[var(--form-bg)] border border-[var(--form-border)] p-6 rounded-xl mt-6  h-fit  overflow-x-hidden">
      <h1 className="text-center mb-7   tracking-wide text-3xl">
        Enter Recipe Details
      </h1>
      <form
        className="flex flex-col gap-5 "
        onSubmit={handleSubmit(submitHandler)}
      >
        <input
          {...register("name")}
          className="px-5 py-3 text-xl border rounded-sm"
          type="text"
          placeholder="Enter Recipe Name"
        />
        <input
          {...register("chefName")}
          className="px-5 py-3 text-xl border rounded-sm"
          type="text"
          placeholder="Enter Chef Name"
        />
        <input
          {...register("imgurl")}
          className="px-5 py-3 text-xl border rounded-sm"
          type="url"
          placeholder="Enter Recipe Image Url"
        />
        <textarea
          {...register("dis")}
          className="px-5 py-3 text-xl border rounded-sm h-[20vh]"
          placeholder="Recipe Discription"
        />
        <textarea
          {...register("ing")}
          className="px-5 py-3 text-xl border rounded-sm h-[20vh]"
          placeholder="Recipe Ingredient's Seperated By Comma"
        />
        <textarea
          {...register("ins")}
          className="px-5 py-3 text-xl border rounded-sm h-[20vh]"
          placeholder="Recipe Instruction Each In New Line"
        />
        <button className="bg-[var(--btn-primary)] hover:bg-[var(--btn-primary-hover)] text-white px-5 py-3 rounded-md shadow-md transition-all duration-200 active:scale-95">
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default Create;
