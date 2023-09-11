import { Center, Heading, Tag, Text } from "@chakra-ui/react";
import { data } from "../utils/data";
import { RecipeCard } from "../components/ui/RecipeCard";

export const RecipeListPage = ({ setSelectedRecipe }) => {
  // You can play around with the console log, but ultimately remove it once you are done
  console.log(data.hits[0].recipe.label);

  return (
    <Center h="100vh" flexDir="column">
      <Heading>Your Recipe App</Heading>
      <>
        {data.hits.map((hit) => (
          <div
            key={hit.recipe.label}
            onClick={() => setSelectedRecipe(hit.recipe)}
            style={{ cursor: "pointer" }}
          >
            <img src={hit.recipe.image} />
            <Text>{hit.recipe.mealType}</Text>
            <Heading>{hit.recipe.label}</Heading>
            <Tag>{hit.recipe.dietLabels}</Tag>
            <Text>Dish:{hit.recipe.dishType}</Text>
            <Tag>{hit.recipe.cautions}</Tag>
          </div>
        ))}
      </>
    </Center>
  );
};
