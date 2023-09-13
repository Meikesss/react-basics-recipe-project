import {
  Card,
  CardBody,
  Heading,
  Image,
  Text,
  Tag,
  VStack,
} from "@chakra-ui/react";

export const RecipeCard = ({ recipe, onClick }) => {
  return (
    <Card
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      margin="4"
      onClick={onClick}
      cursor="pointer"
      _hover={{ transform: "scale(1.01)" }}
      backgroundColor="white"
    >
      <Image
        src={recipe.image}
        alt={recipe.label}
        width="100%"
        height="20vh"
        objectFit="cover"
      />
      <CardBody>
        <VStack align="start" spacing={2}>
          {recipe.mealType && (
            <Text fontSize="xs">{recipe.mealType.join(", ")}</Text>
          )}
          <Heading size="sm">{recipe.label}</Heading>
          {recipe.dietLabels && recipe.dietLabels.length > 0 && (
            <Tag>{recipe.dietLabels.join(", ")}</Tag>
          )}
          {recipe.dishType && (
            <Text fontSize="xs">{recipe.dishType.join(", ")}</Text>
          )}
          {recipe.cautions && recipe.cautions.length > 0 && (
            <Tag>{recipe.cautions.join(", ")}</Tag>
          )}
        </VStack>
      </CardBody>
    </Card>
  );
};
