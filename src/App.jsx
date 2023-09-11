import { RecipeListPage } from "./pages/RecipeListPage";
import { useState } from "react";
import { RecipePage } from "./pages/RecipePage";

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return selectedRecipe ? (
    <RecipePage recipe={selectedRecipe} setSelectedRecipe={setSelectedRecipe} />
  ) : (
    <RecipeListPage setSelectedRecipe={setSelectedRecipe} />
  );
};
