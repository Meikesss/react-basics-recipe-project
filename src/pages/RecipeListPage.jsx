import { Center, Heading, Grid } from "@chakra-ui/react";
import { data } from "../utils/data";
import { RecipeCard } from "../components/RecipeCard";
import { useState } from "react";
import { SearchComponent } from "../components/SearchComponent";

export const RecipeListPage = ({ setSelectedRecipe }) => {
  // You can play around with the console log, but ultimately remove it once you are done
  console.log(data.hits[0].recipe.label);
  console.log(data.hits.length);

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
  };
  const filteredRecipes = data.hits.filter((hit) => {
    const searchTerms = searchTerm.toLowerCase().split(" ");

    return searchTerms.some(
      (term) =>
        hit.recipe.label.toLowerCase().includes(term) ||
        hit.recipe.healthLabels.some((label) =>
          label.toLowerCase().includes(term)
        )
    );
  });

  return (
    <Center flexDir="column" backgroundColor="pink.100">
      <Heading mb="4" mt="8">
        Fabulous Recipes for fabulous Queens!
      </Heading>

      <SearchComponent onSearchChange={handleSearchChange} />

      <Grid
        templateColumns={{
          base: "1fr",
          sm: "repeat(2, 1fr)",
          md: "repeat(4, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={4}
        width="full"
        padding={4}
      >
        {filteredRecipes.map((hit) => (
          <RecipeCard
            key={hit.recipe.label}
            recipe={hit.recipe}
            onClick={() => setSelectedRecipe(hit.recipe)}
          />
        ))}
      </Grid>
    </Center>
  );
};
