import {
  Button,
  Heading,
  Text,
  Image,
  Grid,
  GridItem,
  Flex,
  Badge,
  HStack,
} from "@chakra-ui/react";

export const RecipePage = ({ recipe, setSelectedRecipe }) => {
  return (
    <Grid
      templateColumns="1fr 2fr 2fr 1fr"
      p={4}
      gap={4}
      bg="pink.100"
      borderRadius="lg"
    >
      <GridItem
        colStart={2}
        colSpan={2}
        bg="white"
        borderRadius="md"
        p={4}
        boxShadow="xl"
      >
        <Button
          variant="outline"
          borderColor="black"
          onClick={() => setSelectedRecipe(null)}
          mb={4}
        >
          Back
        </Button>

        <Heading mb={4} textAlign="center">
          {recipe.label}
        </Heading>

        <HStack spacing={5} mb={4} justifyContent="center">
          <Text>Cooking Time: {recipe.totalTime} mins</Text>
          <Text>Servings: {recipe.yield}</Text>
          <Text>Meal Type: {recipe.mealType.join(", ")}</Text>
        </HStack>

        <Flex>
          <Flex direction="column" width="50%" mt="8" mb="4">
            <Heading size="md" mb={4}>
              Ingredients
            </Heading>
            {recipe.ingredientLines.map((ingredient, index) => (
              <Text key={index}>{ingredient}</Text>
            ))}
          </Flex>

          <Flex width="50%" height="fit-content" align="flex-start">
            <Image
              src={recipe.image}
              alt={recipe.label}
              width="100%"
              height="300px" // Fixed height here
              objectFit="cover"
              borderRadius="md"
              my={4}
            />
          </Flex>
        </Flex>

        <Heading size="sm" mb={2} mt={2}>
          Health labels
        </Heading>
        {recipe.healthLabels && (
          <Flex flexWrap="wrap" gap={2} mb={4} mt={4}>
            {recipe.healthLabels.map((label, index) => (
              <Badge key={index} borderRadius="full" px="2" colorScheme="teal">
                {label}
              </Badge>
            ))}
          </Flex>
        )}

        <Heading size="sm" mb={2} mt={2}>
          Diet
        </Heading>
        {recipe.dietLabels && (
          <Flex flexWrap="wrap" gap={2} mb={2} mt={4}>
            {recipe.dietLabels.map((label, index) => (
              <Badge key={index} borderRadius="full" px="2" colorScheme="blue">
                {label}
              </Badge>
            ))}
          </Flex>
        )}
      </GridItem>
    </Grid>
  );
};
