import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-[100%] p-2 text-xl flex justify-between items-center gap-15">
      <h1 className="w-[15%] font-['Pacifico'] text-4xl text-[var(--logo-color)] tracking-wide drop-shadow-md">Recipe's</h1>
      <div className="w-[70%] text-xl flex justify-center items-center gap-15">
        {/* Home */}
        <NavLink
          to="/"
          className={(e) => {
            return e.isActive ? "text-[var(--heading-color)] font-semibold" : "";
          }}
        >
          Home
        </NavLink>
        {/* Recipes  */}
        <NavLink
          to="/recipes"
          className={(e) => {
            return e.isActive ? "text-[var(--heading-color)] font-semibold" : " ";
          }}
        >
          Recipes
        </NavLink>
        {/* About */}
        <NavLink
          to="/about"
          className={(e) => {
            return e.isActive ? "text-[var(--heading-color)] font-semibold" : " ";
          }}
        >
          About
        </NavLink>
        {/* Favorite */}
        <NavLink
          className={(e) => {
            return e.isActive ? "text-[var(--heading-color)] font-semibold" : " ";
          }}
          to="/favorite"
        >
          Favorite
        </NavLink>
        {/* Add Recipe */}
        <NavLink
          className={(e) => {
            return e.isActive ? "text-[var(--heading-color)] font-semibold" : " ";
          }}
          to="/add-recipe"
        >
          Add Recipe
        </NavLink>
      </div>
      <div className="w-[11%] text-sm bg-[var(--btn-update)] hover:bg-[var(--btn-update-hover)] text-white flex items-center justify-center p-3 rounded-md shadow-md transition-all duration-200 active:scale-95">Log in/ Sign up</div>
    </div>
  );
};

export default Navbar;
