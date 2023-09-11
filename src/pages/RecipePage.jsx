import { Button, Heading, Image, Text } from "@chakra-ui/react";

export const RecipePage = ({ recipe, setSelectedRecipe }) => {
  return (
    <>
      <Button onClick={() => setSelectedRecipe(null)}>Back</Button>
      <Heading>{recipe.label}</Heading>
      <Image src={recipe.image} />
      <Text>{recipe.mealType}</Text>
      <Heading>{recipe.label}</Heading>
      <Text>Total cooking time:{recipe.totalTime} minutes</Text>
      <Text>Servings:{recipe.yield}</Text>

      <Heading size="md">Ingredients:</Heading>
      {recipe.ingredientLines.map((ingredient, index) => (
        <Text key={index}>{ingredient}</Text>
      ))}

      <Heading size="md">Health labels:</Heading>
      <Text>{recipe.healthLabels.join(", ")}</Text>

      <Heading size="md">Diet:</Heading>
      <Text>{recipe.dietLabels.join(", ")}</Text>

      <Heading size="md">Cautions:</Heading>
      <Text>{recipe.cautions.join(", ")}</Text>

      <Heading size="md">Total nutrients:</Heading>
      {recipe.totalNutrients ? (
        Object.keys(recipe.totalNutrients).map((nutrientKey) => {
          const nutrient = recipe.totalNutrients[nutrientKey];
          return (
            <Text key={nutrientKey}>
              {" "}
              {nutrient.label}: {nutrient.quantity.toFixed(2)} {nutrient.unit}
            </Text>
          );
        })
      ) : (
        <Text>No nutrient information available</Text>
      )}
    </>
  );
};
