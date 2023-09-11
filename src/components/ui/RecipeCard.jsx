import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
  Button,
} from "@chakra-ui/react";

export const RecipeCard = ({ recipe }) => {
  return (
    <Card>
      <CardHeader>
        <Heading>{recipe.label}</Heading>
      </CardHeader>

      <CardBody>
        <Image src={recipe.image} alt={recipe.label} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="sm">Ingredients</Heading>
          <Text>{recipe.ingredientLines.join(", ")}</Text>
        </Stack>
      </CardBody>

      <CardFooter>
        <Button>View Recipe</Button>
      </CardFooter>
    </Card>
  );
};
