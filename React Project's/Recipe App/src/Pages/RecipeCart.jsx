import { Link } from "react-router-dom";

const RecipeCart = (props) => {
  const { id,name, chefName, imgurl, dis } = props.value;
  

  return <Link to={`/home/recipe-detail/${id}`} className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-3xl p-4 shadow-xl  w-[31vw] cursor-pointer">
      <img
        className="w-full h-[30vh] object-cover rounded-xl"
        src={imgurl}
      />
      <div className="py-2 flex justify-between items-center">
        <h2 className="text-xl text-[var(--heading-color)]">{name}</h2>
        <h3 className="text-[var(--subheading-color)] text-sm">By {chefName}</h3>
      </div>
      <p>{dis.slice(1,140)}...<small className="text-[var(--subheading-color)]">more</small></p>
    </Link>;
};

export default RecipeCart;
