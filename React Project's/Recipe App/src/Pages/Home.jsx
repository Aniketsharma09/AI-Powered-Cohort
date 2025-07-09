import { useNavigate } from "react-router-dom";
import chef from "../images/chef 2.png"
const Home = () => {
 const navigate = useNavigate()
  const goto = () => {
    navigate('/recipes')
  }
  return (
    <div className="flex h-[80vh] w-screen justify-between items-center">
      <div className="ml-10 flex flex-col w-[58%] justify-center h-[50%] ">
        <h1 className=" text-7xl font-medium leading-20 tracking-wide">Cook Like a Pro with Our <span className="text-[var(--heading-color)]">Easy</span> and <span className="text-[var(--heading-color)]">Tasty</span> Recipes </h1>
        <h4 className="self-start text-2xl text-gray-400 mt-7">
         From quick and easy meals to gourmet delights, we have something for every taste and occasion.
        </h4>
        <button onClick={goto} className="self-start mt-7 bg-[var(--btn-update)] hover:bg-[var(--btn-update-hover)] text-white px-5 py-3 rounded-md shadow-md transition-all duration-200 active:scale-95">Explore all Recipes</button>
      </div>
      <div className="w-[40%]">
        <img src={chef} />
      </div>
    </div>
  );
};

export default Home;
