import React, { createContext, useState } from 'react'
export const recipeContext = createContext(null);

const recipes = JSON.parse(localStorage.getItem('recipe')) || [];
const RecipeContext = (props) => {
     const [recipeData, setRecipeData] = useState(recipes);
  return ( 

    <recipeContext.Provider value = {{recipeData, setRecipeData}}>
        {props.children}
    </recipeContext.Provider>
  )
}

export default RecipeContext